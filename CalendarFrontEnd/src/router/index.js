import Vue from 'vue'
import Router from 'vue-router'
import Calendar from '@/components/Calendar'
import EventForm from '@/components/EventForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/eventForm/:month/:day',
      name: 'EventForm',
      component: EventForm,
      props: true
    }
  ]
})
