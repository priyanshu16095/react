import React from 'react'
import { useContext } from 'react'
import { UserContext } from './Context'

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <div>Please login</div>
    return <div>Welcome {user.emailId}</div>
}

export default Profile
