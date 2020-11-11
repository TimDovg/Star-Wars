import axios from 'axios'

const StarWarsAxios = axios.create({
    baseURL: 'https://swapi.dev/api/'
})

export default StarWarsAxios
