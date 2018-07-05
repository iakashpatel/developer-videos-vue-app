<template>
  <div class="all-videos">
    <h2>{{ title }}</h2>
    <hr/>
    <div v-if="categories && categories.length">
      <div v-for="category in categories">
        <h2>{{category.name}}</h2>
        <ul class="list" v-bind:v-if="videos && videos.length">
          <li class="item" v-for="video of videos" :key="video.id">
            <div v-if="video.category_id === category.id">
            <router-link v-bind:to="{ path: '/video/' + video.id }">
              {{video.title}}
            </router-link>
            <router-link v-bind:to="{ path: '/edit-video/' + video.id }">
              <button>Edit</button>
            </router-link>
            <button @click="showAlert(video.id)">Delete</button>
            </div>
          </li>
        </ul>
        <hr/>
      </div>
    </div>

    <ul v-if="errors && errors.length">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'all-videos',
  data() {
    return {
      title: ' -- All Videos --',
      videos: [],
      categories: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {

    this.addVideo();

    axios.get(`${process.env.API_URL}/api/categories`)
    .then(response => {
      console.log(response.data.date);
      this.categories = response.data.data;
    })
    .catch(e => {
      this.errors.push(e)
    })
    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  },

  methods: {
    // deleteVideo: function (videoId) {

    // },

    addVideo: function() {
      //1- axios.get(`http://demo2991721.mockable.io/api/videos`)
      axios.get(`${process.env.API_URL}/api/videos`)
      .then(response => {
        console.log(response.data.date);
        // JSON responses are automatically parsed.
        this.videos = response.data.data;
        //1- this.videos = response.data.video;
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    showAlert(videoId){
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          axios.delete(`${process.env.API_URL}/api/videos/${videoId}`)
          .then(response => {
            this.$swal(
              'Deleted!',
              'Your video has been deleted.',
              'success'
            )
            this.addVideo();
          })
          .catch(e => {
            this.errors.push(e)
          })
        }
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  font-size: 20px;
  font-weight: bold;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 5px;
  display: block;
  margin: 0 10px;
}
hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}
</style>
