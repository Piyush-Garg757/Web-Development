import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

// Iss component ko banane ka purpose ye tha ki humein 
function Github() {
    // Ab humein followers nikalne k eloye api call karna padega and hum chahte hain page load hote hi api call ho jaye so we use UseEffect and uske andar hum fetch ka use karke api call karenge

    // Neeche vale ko loader samajhte time ke liye comment kiya hai
    /*const[data,setData] = useState([])
    useEffect(()=> {
        fetch("https://api.github.com/users/Piyush-Garg757") // ye sab yaha karne ki bajat and use effect lagane ki bajay hum router ka direct loader use kar sakte hain main .jsx me jake dekho uska concept likha hai
            .then((response) => response.json())
            .then(data => setData(data))
    },[])*/
    
    const data = useLoaderData() // yaha loader vale hook ka use kar liya 
    return (
        <>
        <h1>Github followers: {data.followers}</h1>
        <img src={data.avatar_url} alt="" />
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response  = await fetch("https://api.github.com/users/Piyush-Garg757")
    return response.json()
}
// iss function ko yaha se export karke vaha loader me de denge