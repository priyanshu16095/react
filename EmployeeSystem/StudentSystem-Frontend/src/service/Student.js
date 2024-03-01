import axios from 'axios'

const BASE_URL = "http://localhost:8080/student"

class Student {
    saveStudent(student) {
        return axios.post(BASE_URL, student)
    }
    getStudent() {
        return axios.get(BASE_URL)
    }
}

export default new Student()