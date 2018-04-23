<template>
    <form>
        <h1>{{ month }} {{ day }},</h1>
        <h1>title</h1>
            <input v-model="title" placeholder="title here">
        <h1>description</h1>
            <input v-model="description" placeholder="description here">
        <h1>start time</h1>
        <select v-model="selected">
            <option v-for="(time,index) in startTime" v-bind:key="index">{{ index }}</option>
        </select>        
        <h1>end time</h1>
        <select v-model="selected">
            <option v-for="(time,index) in endTime" v-bind:key="index">{{ index }}</option>
        </select>
        <br>
        <button @click="createEvent"> submit </button>
    </form>
</template>

<script>
import EventsService from '@/services/EventsService'

export default {
    props: ['day','month'],
    data() {
        return {
            title: '',
            description: '',
            startTime: 24,
            endTime: 24,
        }
    },
    method: {
        async createEvent(){
            try {
                await EventsService.register({
                    title: this.title,
                    description: this.description,
                    startTime: this.startTime,
                    endTime: this.endTime,
                    day: this.day
                })
            } catch (error) {
                this.error = error.response.data.error
            }
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
