import { useState,useEffect } from "react"

export const useFetch = (url) => {
    const [data,setData]= useState([])

    useEffect (() => {
    fetch(url) // {a; products : [{},{}]}
        .then(res => res.json())
        .then(data => setData(data))
    },[url])
    return data
}
