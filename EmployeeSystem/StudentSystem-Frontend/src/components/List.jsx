import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Student from '../service/Student'

function List() {
    const[loading, setLoading] = useState()
    const[students, setStudents] = useState()

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true)
            try {
                const response = await Student.getStudent()
                setStudents(response)
            } catch(err) {console.log(err)}
            setLoading(false)
        }
        fetchData()
    }, [])

    return (
        <>
            {!loading && (
            <section>
                <div>
                    {students.map((student) => (
                        <>
                            <h3>{student.id}</h3>
                            <h4>{student.name}</h4>
                        </>
                    ))}
                </div> 
            </section>)}
        </>
    )
}

export default List
