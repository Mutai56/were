// Data sevice
import axios from 'axios'
import authHeader from './auth-header'

const API_URL = process.env.VUE_APP_API_URL;

class CalendarService {
    getAllAvailableDates() {
        return axios.get(API_URL + 'available-dates', { headers: authHeader() })
    }
    getBookingsByDate() {
        return axios.get(API_URL + 'bookings-by-dates', { headers: authHeader() })
    }
}

export default new CalendarService()