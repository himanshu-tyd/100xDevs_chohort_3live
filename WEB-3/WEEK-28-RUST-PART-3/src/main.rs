// use chrono::Utc;
// use dotenv::dotenv;
// use std::env;



struct Rect<T>{
    height:T,
    width: T
}

impl <T:std::ops::Mul<Output = T> + Copy> Rect<T>{
    fn area(&self)->T{
        return self.height * self.width
    }
}


fn main(){


    let obj=Rect{
        width:340,
        height:343
    } ;


    print!("{}", obj.area())



    // dotenv.ok()
    // let utc= Utc::now();

    // let  redis_url = env::var("REDIS_URL");

    // println!("{}", utc);
    // println!("{}", redis_url);

    // let s1=sum(40, 30);
    // let s2=sum("nice","good");

}

// fn sum<T:std::ops<>>(a: T , b: T)-> T {
//     return a+b;
// }