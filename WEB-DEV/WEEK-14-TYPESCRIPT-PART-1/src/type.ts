interface userProps{
    name:string,
    age:number
}

type user={
    name:string,
    age:number
}

type x= number | string


function  great(a:x, b:x){
    console.log(typeof(a), typeof(b))
}


