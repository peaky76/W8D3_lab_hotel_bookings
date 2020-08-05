<template>
    <li >
         <span>Name: {{booking.name}}</span><br/>
         <span>Email: {{booking.email}}</span><br/>
         <span>Checked-in? {{booking.checkedIn}}</span><br/>
         <button v-on:click="deleteBooking()">Delete booking</button>
    </li>
</template>

<script>

import { eventBus } from '../main.js'
import BookingService from '../service/BookingService'
export default {
    name: 'booking-list-item',
    props: ['booking'],
    methods: {
       deleteBooking(){
           BookingService.deleteBooking(this.booking._id)           
            .then(() => eventBus.$emit('booking-deleted', this.booking._id))

       }
    }

}
</script>

<style>

</style>