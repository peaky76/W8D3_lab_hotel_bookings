<template>
    <div>
        <booking-form/>
        <booking-list :bookings="bookings"/> 
    </div>
  
</template>

<script>
import { eventBus } from './main.js'
import BookingService from './service/BookingService.js'
import BookingForm from './components/BookingForm'
import BookingList from './components/BookingList'

export default {
    name: 'app',
    components: {
        'booking-form': BookingForm,
        'booking-list': BookingList 
    },
    
    data() {
        return {
            bookings: []
        }
    },

        mounted() {
            BookingService.getBookings()
            .then(bookings => this.bookings = bookings);

            eventBus.$on('booking-added', (booking) => {
                this.bookings.push(booking)
            })

            eventBus.$on('booking-deleted' , (id) => {
                let index = this.bookings.findIndex((booking) => {
                    booking._id === id
                })
                this.bookings.splice(index, 1)
                
            }) 
        }

}
</script>

<style>

</style>
