use std::{fmt::Formatter, path::Display};



struct User{
    name:String,
    age:u32
}


fn main() {

    let u=User{
        name:String::from("himanshu"),
        age:43
    };

    println!("{}", u.name);
    println!("{}", u)
}
