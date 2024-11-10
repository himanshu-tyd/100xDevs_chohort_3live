function greet(name:string){
    console.log(`hello ${name}`)
}

greet('himanshu')

interface people{
    name:string,
    age:number
}

class office implements people{
    name:string;
    age:number;
    constructor(name:string , age:number){
        this.name=name
        this.age=age
    }
}