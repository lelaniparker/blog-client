import axios from 'axios'

// Create an axios instance
export default axios.create({
  //baseURL: 'http://localhost:3009',
  baseURL: process.env.EXPRESS_URI || 'https://limitless-lowlands-34451.herokuapp.com/',
  timeout: 5000,
  withCredentials: true
})