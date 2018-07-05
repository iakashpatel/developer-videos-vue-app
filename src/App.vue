<template>
  <div id="app">
    <h1>Video App</h1>
    <div class="nav">
    <ul>
     <li><router-link to="/">Home</router-link></li>
     <li><router-link to="/all-videos">All Videos</router-link></li>
     <li><router-link to="/add-video">Add Video</router-link></li>
     <li><router-link to="/about">About</router-link></li>
    </ul>
    </div>
    <div class="content">
      <router-view/>
    </div>
    <div class="footer">
      <p> Copyright 2018 - Video App</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
  color: #4fc08d;
  padding: 10px 0px 10px 0px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #2980b9;
  text-decoration: none;
}

.nav > ul > li > a {
  color: #ffffff;
  line-height: 60px;
}

a:hover {
  text-decoration: underline
}

.content {
  border-top: 10px #4fc08d solid;
  margin-bottom: 100px;
}

.nav{
  height: 50px;
  font-size:18px;
  background-color: #4fc08d;
  color: #ffffff !important;
}

.footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  overflow: visible;
  z-index: 99;
  background-color: #4fc08d;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
  left: 0;
  height: 45px;
}

</style>
