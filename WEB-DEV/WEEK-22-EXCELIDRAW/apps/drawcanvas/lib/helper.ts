'use client'

export const getFullYear=()=>{
    return new Date().getFullYear()
}

export const getUser=()=>{
    return JSON.parse(localStorage.getItem("user") || "{}")
}   

export const getToken=()=>{
    return localStorage.getItem("token")
}

export const user=getUser()
export const token=getToken()




