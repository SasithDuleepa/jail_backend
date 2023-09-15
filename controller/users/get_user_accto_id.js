const DB = require('../../config/database');const path = require('path');
const url = require('url')
const querystring = require('querystring');

const GetUser_accto_id =( req, res)=>{
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.user_id;

    console.log(parameter)

    if(parameter){
        const query = `SELECT * FROM user WHERE user_id =${parameter}`
        DB.connection.query(query, (err, result)=>{
            if(result){
            res.send(result)
           }else{
            res.send(err)
           }
        })
    
}

}

module.exports = GetUser_accto_id;