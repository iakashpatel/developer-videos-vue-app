import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'
import all_videos from '@/components/all-videos'
import video from '@/components/video'
import add_video from '@/components/add-video'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/all-videos',
      name: 'all-videos',
      component: all_videos
    },
    {
      path: '/video/:id',
      name: 'video',
      component: video
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/add-video',
      name: 'add-video',
      component: add_video
    }
  ]
})
