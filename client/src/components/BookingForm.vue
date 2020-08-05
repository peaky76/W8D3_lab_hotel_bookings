<template>
  <form class="" v-on:submit="addBooking" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" required/>

    <label for="email">Email:</label>
    <input type="text" id="email" v-model="email" required/>

    <label for="checkedIn">Checked in:</label>
    <input type="checkbox" id="checkedIn" v-model="checkedIn"/>

    <input type="submit" value="Save" id="save"/>

  </form>
</template>

<script>
import { eventBus } from '../main.js'
import BookingService from '../service/BookingService.js'
export default {
    name: 'booking-form',
    data() {
        return {
            name: '',
            email: '',
            checkedIn: false,
        }
    },
    methods: {
       addBooking(event) {
           event.preventDefault()
          const booking = {
              name: this.name,
              email: this.email,
              checkedIn: this.checkedIn
          }
          BookingService.addBooking(booking)
          .then(res => eventBus.$emit('booking-added', res))
       }
    }

}
</script>

<style>

</style>