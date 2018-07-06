<template>
  <div id="app">
    <b-navbar toggleable="md" type="light" variant="light" sticky>
      <div>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
      <b-navbar-brand href="#">Video App</b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item ><router-link to="/">Home</router-link></b-nav-item>
          <b-nav-item ><router-link to="/all-videos">All Videos</router-link></b-nav-item>
          <b-nav-item ><router-link to="/add-video">Add Video</router-link></b-nav-item>
          <b-nav-item ><router-link to="/about">About</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      </div>
    </b-navbar>

    <div>
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
  color: #4fc08d;
  text-decoration: none;
}

.nav > ul > li > a {
  color: #ffffff;
  line-height: 60px;
}

a:hover {
  color: #178654;
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
html {
  height: 100%;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  position: relative;
  margin: 0;
  padding-bottom: 6rem;
  min-height: 100%;
}

.footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding-top: 1rem;
  background-color: #4fc08d;
}
</style>
