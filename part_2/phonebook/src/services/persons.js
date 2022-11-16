import axios from 'axios'

const url = '/api/person'

const getAll = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const postPerson = (person) => {
    const request = axios.post(url, person)
    return request.then(response => response.data)
}
const deletePerson = (id) => {
    const request = axios.delete(`${url}/${id}`)
    return request.then(response => response)
}
const update = (id, newObject) => {
    const request = axios.put(`${url}/${id}`, newObject)
    return request.then(response => response.data)
}

const personsServices = {
    getAll,
    postPerson,
    deletePerson,
    update,
}
export default personsServices