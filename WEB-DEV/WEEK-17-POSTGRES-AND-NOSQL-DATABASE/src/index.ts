import {Client} from 'pg'


const pgClient=new Client({
    user:"neondb_owner",
    password:"AEYQB7Lc0WNy",
    port:5432,
    host:"ep-purple-grass-a5njhjz5.us-east-2.aws.neon.tech",
    database:"neondb",
    ssl:true
})

async function main(){
    await pgClient.connect()
    const res=await pgClient.query('SELECT * FROM persons')
    console.log("USERS- >" ,res.rows)
}

main()