import axios from 'axios'

const token = process.env.VUE_APP_SECRET_TOKEN;
const url = process.env.VUE_APP_BACKEND_URL;

const apiClient = axios.create({
  baseURL: url,
  withCredentials: false,
  headers: {
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/json'
  }
})

export default {
  postUpdateHistories(data) {
    console.log(url)
    return apiClient.post('/update_histories', data)
  },
  getHistories(params) {
    return apiClient.get('/update_histories', params)
  }
}
