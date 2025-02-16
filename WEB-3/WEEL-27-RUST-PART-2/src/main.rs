// use rect::Rect
// pub mod rect;



// fn main() {
//   let s1=String::from("Himanshu");
  
//   let ans=get_length(s1);

//   print!("{}", ans)


// }
// fn get_length(str:String)->usize{
//     return str.len()
// }


// impl Rect{
//     fn area(&self)-> f32{
//          return  self.width* self.height;   
//     }   
// }
enum Shape{
    Square(f32),
    Circle(f32),
    Rectangle(f32, f32)
}
fn main(){
    let shape_square=Shape::Square(3.6);
    let shape_circle=Shape::Circle(30.6);
    let shape_rect=Shape::Rectangle(34.8 , 34.0);

    println!("{}",shape_circle);
    println!("{}",shape_square);
    println!("{}",shape_rect);


}


fn calc(shapes:Shape){
    match  shapes {
        Shape::Circle(redius)=>PI*redius+redius,
        Shape::Rectangle(w,h )=>w*h,
        Shape::Square(sides)=>sides+sides
    }
}





//recap mode.rs file and import export thinK