<template>
  <div class="add-video">
    <h2>{{ title }}</h2>
    <p>Found a useful video for this community ? then why not Submit it in appropriate category and help other fellow developers?
      <br/>Submit form below:
    </p>
    <br/>

    <form @submit.prevent="handleSubmit" class="add-video-form center">
      <label class="label">
        Title:
      </label>
      <input type="text" v-model="submitedData.title"/>
      <label class="label">
        Link:
      </label>
      <input type="text" v-model="submitedData.id"/>
      <label class="label">
        category id:
      </label>
      <div v-if="categories && categories.length" class="select-wrap">
        <select class="select" v-model="submitedData.category_id">
          <option v-for="category in categories" v-bind:value="category.id">{{ category.name }}</option>
        </select>
      </div>
      <button type="submit" class="btn">Submit</button>
    </form>

    <br/>
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
  name: 'add-video',
  data () {
    return {
      title: 'Submit Helpful Video',
      submitedData: {
        id: '',
        title: '',
        category_id: 1,
      },
      categories: null,
      errors: [],
      message: 'Add Video'
    }
  },
  mounted(){
    axios.get(`${process.env.API_URL}/api/categories`)
    .then(response => {
      this.categories = response.data.data;
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    getQueryString( field, url ) {
      var href = url ? url : '';
      var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
      var string = reg.exec(href);
      return string ? string[1] : null;
    },
    handleSubmit() {
      let data1 = this.submitedData;
      data1.id = this.getQueryString('v', this.submitedData.id);

      if(data1.id){
        axios.post(`${process.env.API_URL}/api/videos`, {
         "id": data1.id, "title": data1.title, "category_id": data1.category_id
         })
         .then((response) => {
           console.log(response);
           this.success();
           this.$router.push('/all-videos');
         })
         .catch((error) => {
            console.log(error);
            this.somethingWrong();
         });
      } else {
        this.somethingWrong();
      }
    },
    success(){
      this.$swal({
        position: 'center',
        type: 'success',
        title: 'Video has been added',
        showConfirmButton: false,
        timer: 1500
      })
    },
    somethingWrong() {
      this.$swal({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-size: 18px;
  padding: 20px 100px 20px 100px;
  line-height: 30px;
  text-align: center;
}
p.message {
  color: #ffffff;
  width: 50%;
  margin:auto auto 30px auto;
  font-size: 28px;
  padding: 10px;
  -webkit-transition-timing-function: ease;
}
.center {
    margin: auto;
    width: 60%;
    border: 5px dotted #4fc08d;
    padding: 50px;
}
input, select {
  display: block;
  box-sizing: border-box;
  width: 100%;
  outline: none;
  border: solid #4fc08d;
  padding: 10px;
  font-size: 18px;
  border-radius: 50px;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.label {
  text-align:left;
  font-size: 20px;
  padding: 10px;
  display: block;
  margin-bottom: 0.25em;
}

.input {
  padding: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: lightgray;
  background-color: white;

  &:focus {
    border-color: gray;
  }

  &::placeholder {
    color: gray;
  }
}
.select {
  @extend .input;

  position: relative;
  z-index: 1;
  padding-right: 40px;
  &::-ms-expand {
    display: none;
  }
}
.select-wrap {
  position: relative;
  &:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    padding: 0 15px;
    width: 10px;
    height: 100%;
    background-position: center;
    background-size: 10px;
    background-repeat: no-repeat;
    content: "";
    pointer-events: none;
  }
}

button{
  margin-top: 20px;
  display: block;
  box-sizing: border-box;
  width: 100%;
  outline: none;
  color: #4fc08d;
  border: solid #4fc08d;
  padding: 10px;
  font-size: 20px;
  border-radius: 50px;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

button:hover {
  background-color: #4fc08d;
  color: white;
}
</style>
