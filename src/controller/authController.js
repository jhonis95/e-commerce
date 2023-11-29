const dbCon=require('../model/dbconect')

const authUser=(id, password)=>{
    dbCon.query(
        `SELECT * FROM users WHERE username = ${id} AND password =${password}`,
        (err, results, fields)=>{
            console.log(results)
        }
    )
}


module.exports=authUser