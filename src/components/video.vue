<template>
  <div class="video">
    <h2>{{ title }}</h2>
    <div class="video-container">
      <iframe width="640" height="352" v-bind:src="this.id" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'video',
  data () {
    return {
      title: 'Play Video',
      id: `https://www.youtube.com/embed/${this.$route.params.id}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.video{
  width:80%;
  max-width: 640px;
  margin: 0 auto;
}

.video-container {
  position:relative;
  padding-bottom:56.25%;
  padding-top:30px;
  height:0;
  overflow:hidden;
}

.video-container iframe, .video-container object, .video-container embed {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  max-width: 640px;
}
</style>
