import axios from 'axios'
import { SAVE_USERNAME_PATH } from 'services/constants'

export const api = axios.create({
  baseURL: 'https://supermarket-list-web-backend.herokuapp.com',
  headers: {
    username: localStorage.getItem(SAVE_USERNAME_PATH) || ''
  }
})
