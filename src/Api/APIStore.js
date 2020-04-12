/*
Class to manage APIStore Instance
*/

import axios from 'axios';
let key = 'H7_n0PCOUjVZEMUpa1HCeC6LFPts3LXArEZbjpURqiis-40Cu3wQER1SAENdf4t08Td08hODQQMinYB4U97GpJ4vMptJHQdOz1ELeONy7KxyiQiBB1aLyHUJBczOXXYx'

const APIStore = axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {'Authorization': 'Bearer ' + key } 

});
export { APIStore };