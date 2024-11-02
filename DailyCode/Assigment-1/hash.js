//Write a brute force algorithms to fint hex staring that start with 00000

const crypto=require('crypto')

let input='00000'
let track=0

while(true){
    const hash=crypto.createHash('sha256').update(`${track}`).digest("hex")
    if(hash.startsWith(input)){
        console.log(hash)
        break
    }

    track++
    // console.log(track)
}