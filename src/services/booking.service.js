// Data sevice
import axios from 'axios'
import authHeader from './auth-header'

const API_URL = process.env.VUE_APP_API_URL;

class BookingService {
    index() {
        return axios.get(API_URL + 'booking', { headers: authHeader() })
    }
    show(resource) {
        return axios.put(API_URL + 'booking/' + resource.id, resource, { headers: authHeader() })
    }
    store(resource) {
        return axios.post(API_URL + 'booking', resource, { headers: authHeader() })
    }
    update(resource) {
        return axios.put(API_URL + 'booking/' + resource.id, resource, { headers: authHeader() })
    }
    delete(resource) {
        return axios.delete(API_URL + 'company/' + resource.id, { headers: authHeader() })
    }
}

export default new BookingService()