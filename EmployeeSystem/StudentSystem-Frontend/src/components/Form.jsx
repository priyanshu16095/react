import React, { useState } from 'react'
import Student from '../service/Student'

function Form() {
    const[student, setStudent] = useState({
        id: "",
        name: "",
        fatherName: "",
        motherName: ""
    })

    const handleChange = (e) => {
        setStudent({...student, [e.target.name]: e.target.value})
    }
    const createStudent = () => {
        Student.saveStudent(student)
        .then(response => alert("Student created successfully"))
        .catch(err => console.log(err))
    }

    return (
        <div className='container'>
            <h4>Student Details</h4>
            <input type="text" placeholder='Id' name='id' value={student.id} onChange={e => handleChange(e)} />
            <input type="text" placeholder='Name' name='name' value={student.name} onChange={e => handleChange(e)} />
            <input type="text" placeholder="Father's Name" name='fatherName' value={student.fatherName} onChange={e => handleChange(e)} />
            <input type="text" placeholder="Mother's Name" name='motherName' value={student.motherName} onChange={e => handleChange(e)} />
            <button onClick={createStudent}>Save</button>
        </div>
    )
}

export default Form