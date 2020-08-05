const baseURL = 'http://localhost:3000/api/bookings'

export default {
    addBooking(payload) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        
    },

    getBookings() {
        return fetch(baseURL)
        .then(res => res.json())
    }


}

