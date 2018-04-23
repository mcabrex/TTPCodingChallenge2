import Api from '@/services/Api'

export default {
  index () {
    return Api().get('events')
  },
  createEvent (event) {
    return Api().post('events', event)
  }
}
