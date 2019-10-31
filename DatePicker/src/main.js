var Vue = require('vue').default
var Moment = require('moment')

var Datepicker = Vue.extend({
  props: {
    value: {
      type: String,
      required: true
    },
    format: {
      type: String,
      default: 'YYYY/MM/DD'
    }
  },
  data: function () {
    return {
      date: Moment(this.value, 'YYYY/MM/DD')
    }
  },
  computed: {
    date_formatted: function () {
      return this.date.format(this.format)
    }
  },
  template: '<input type="text" :value="date_formatted">'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    datepicker: Datepicker
  }
})
