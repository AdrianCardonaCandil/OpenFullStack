import axios from "axios"
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl).then(response => response.data)
const create = person => axios.post(baseUrl, person).then(response => response.data)
const erase = id => axios.delete(`${baseUrl}/${id}`).then(response => response.data)

export default {getAll, create, erase}