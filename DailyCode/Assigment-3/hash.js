//Write a brute force algorithms to fint hex staring that start with 00000

const crypto=require('crypto')



function hash(prefix){
    let num=596139
    let input=`himanshu => 100xdevs | 100 ${num}  `

    while(true){
        const hash=crypto.createHash('sha256').update(`${num}`).digest("hex")
        if(hash.startsWith(prefix)){
            console.log(hash)
            break
        }
    
        num++
    }
}

hash("0000000")

