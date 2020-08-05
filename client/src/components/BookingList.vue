<template>
      <ul>
      <booking-list-item v-for="(booking, index) in bookings" :key="index"></booking-list-item>
      </ul>
</template>

<script>
import BookingListItem from './BookingListItem'
export default {
    name: 'booking-list',
    props: ['bookings'],
    components: {
        'booking-list-item': BookingListItem
    }

}
</script>

<style>

</style>