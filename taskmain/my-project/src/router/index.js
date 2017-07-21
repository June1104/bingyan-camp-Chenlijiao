import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article/Article.vue'
import Picture from '@/components/Picture/Picture.vue'
import Shipin from '@/components/Shipin/Shipin.vue'
import Music from '@/components/Music/Music.vue'
import Public from '@/components/Public/Public.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/picture',
      name: 'Picture',
      component:Picture
    },
    {
      path: '/shipin',
      name: 'Shipin',
      component:Shipin
    },
    {
      path: '/music',
      name: 'Music',
      component:Music
    },
    {
      path: '/public',
      name: 'Public',
      component:Public
    }
  ]
})
