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

struct Rect<T> {
    heigth: T,
    width: T,
}
impl<T: std::ops::Add<Output = T> + Copy> Rect<T> {
    fn area(&self) -> T {
        return self.heigth + self.width;
    }

    fn radius(&self) -> T {
        return self.width + self.heigth;
    }
}

fn main() {
    let s1 = Rect {
        width: 43,
        heigth: 32,
    };

    let s2 = Rect {
        width: 23,
        heigth: 30,
    };

    println!("{}", s1.area());
    println!("{}", s2.radius());
}

//recap mode.rs file and import export thinK
