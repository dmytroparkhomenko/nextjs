"use client"

import { useState } from "react"

export default function Posts() {

    const [likes, setLikes] = useState(0)

    return (
        <>
            <h1>About us</h1> 
            <h3>Likes: {likes}</h3>
            <button onClick={() => setLikes(likes + 1)}>
                like
            </button>
        </>
    )
}