<template>
    <div>
        <booking-list :bookings="bookings"/>
        <booking-form/>
    </div>
  
</template>

<script>
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';

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
    }

}
</script>

<style>

</style>
