<template>
    <li >
         <span>Name: {{booking.name}}</span><br/>
         <span>Email: {{booking.email}}</span><br/>
         <span>Checked-in? {{booking.checkedIn}}</span><br/>
         <button v-on:click="deleteBooking()">Delete booking</button>
    </li>
</template>

<script>
export default {
    name: 'booking-list-item',
    props: ['booking'],
    methods: {
       deleteBooking(){

       }
    }

}
</script>

<style>

</style>