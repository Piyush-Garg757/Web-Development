import React, { use } from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return (
        // yaha userid ko iss tarah se use karne ke liye humein useParams ka use karna padta hia
        <h1>User: {userid} </h1>
        // Ab humne url se ek paramater ka access le liya hai iske basis pe hum db calls ya kuch bhi karna chahein kar sakte h
    )
}

export default User
