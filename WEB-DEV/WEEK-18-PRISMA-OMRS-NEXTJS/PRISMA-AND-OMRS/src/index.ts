import express from express
import {PrismaClient} from '@prisma/client'



const client=new PrismaClient()


const createUser=async()=>{

    const user=await client.user.create({
        data:{
            username: 'himanshu',
            password: '123',
            age: 21,
            city: 'dahod'
        }
    })

    console.log(user)

}

createUser()


