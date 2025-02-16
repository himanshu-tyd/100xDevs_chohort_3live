fn main() {
        // let ans=sum(20 ,60);
        // println!("{}", ans);

    // let is_even = is_even(3);

    // println!("{}", is_even);

    // str()

    // vec_exmple();

    // for_loops();()

    // let mut _x=40;
    // _x=20;

    // print!("{}",_x)


    // let str = String::from("Harkirat");
    // let ref1 = &str;
    // let ref2 = &str;
    
    // println!("{} {}", ref1, ref2);


   
        // let mut str = String::from("Harkirat");
        // let ref1 = &mut str;
        // let ref2 = &str;
        
        // println!("{} {}", ref1, ref2);

    
            let mut str = String::from("Harkirat");
            let ref1 = &mut str;
            ref1.push_str("Singh");
            let ref2 = &str;
            
            println!("{}", ref2);
        

}
// fn sum(a: u32, b: u32) -> u32 {
//     return a + b;
// }

// fn is_even(a: u32) -> bool {   //booleans's
//     return a % 2 == 0;
// }

// fn str(){
//     let mut name=String::from("Himanshu");  //strings

//     name.push_str(" Taviyad");



//     let name2=name;

//     println!("{}", name2 );  // if try to access it "name" it will through dangling pointer error in other word null pointer exception
// }

// fn vec_exmple(){
//     let v=vec![10,40, 50, 60]; //vectors

//     print!("{:?}", v.len())

// }

// fn for_loops(){
//     for i in 0..100{
//         println!("{}", i)
//     }
// }


