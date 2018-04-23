<template>
  <iv>
    <h1>{{ month }}</h1>
    <h2>Click a day to add an event!</h2>
    <iv class="weekday" v-for="name in dayNames" v-bind:key="name">
      <div>{{name}}</div>
    </iv>
    <br>
    <iv class="days" 
      v-for="day in days"  
      v-bind:key="day">
        <div
          @click="navigateTo({name: `EventForm`, params : {month,day}})"
          bla:day
        >
        {{day}}
        </div>
    </iv>
    <br>    
  </iv>

</template>

<script>
import MonthsService from '@/services/MonthsService'
import EventsService from '@/services/EventsService'
const date = new Date();

// const dayMaker = (amountOfDays) => {
//   const arrTemp = []
//   for(let i = 0; i < amountOfDays; i++){
//     arrTemp.push(i)
//   }
// }

export default {
  methods: {
    navigateTo(route){
      this.$router.push(route)
    }
  },
  data() {
    return {
      month: 0,
      dayNames: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
      days: 0,
      events: null
    }
  },
  async mounted() {
    this.month = (await MonthsService.index()).data[date.getMonth()].month
    this.days = (await MonthsService.index()).data[date.getMonth()].days
    this.events = await EventsService.index()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .weekday div {
    border-color: black;
    border-style: solid;
    display: inline-block;
    width: 13.6%;
    text-align: center;
  }
  .days div {
    height: 12.5vh;
    border-color: black;
    border-style: solid;
    display: inline-block;
    width: 13.6%;
    text-align: center;
  }
</style>
