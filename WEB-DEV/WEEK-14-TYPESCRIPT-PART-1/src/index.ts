// let x:number=1 //type interface

// x=4

// console.log(x)


// function hello(name:string){
//     console.log(`hello ${name}`)
// }

// hello('himanshu')


// function sum(x:number, y:number):number{
//     return x+y
// }

// console.log(sum(3,6))

// function ageMap(age:number):boolean{
//     if(age>18){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(ageMap(30))


// function delayCall(fn:()=>void){
//     setTimeout(fn,5000)
// }

// delayCall(()=>{
//     console.log("hey")
// })

interface userProps{
    name:string,
    age:number
}

function greet(user:userProps){
    console.log(user.name)
}

const user={
    name:'himanshu',
    age:3
}

greet(user)