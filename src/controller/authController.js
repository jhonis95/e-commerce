// const dbCon=require('../model/dbconect')

// const authUser=(id, password)=>{
//     dbCon.query(
//         `SELECT * FROM users WHERE username = ${id} AND password =${password}`,
//         (err, results, fields)=>{
//             console.log(results)
//         }
//     )
// }

// const knex= require('../model/dbconect')

function getAllUsers(knex){
  return knex.select("*")
    .from("user")
    .then(data => console.log(data));
}
function auth(user,password,knex){
  return knex.select('id','name')
    .from('user')
    .where({name:user,password:password})
    .then(data =>{return data});
}
module.exports={getAllUsers,auth}