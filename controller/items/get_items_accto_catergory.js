

const DB = require('../../config/database');const path = require('path');
const url = require('url')
const querystring = require('querystring')


const GetItems_accto_catergory =( req, res)=>{
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.catergory;


    if(parameter){
        const query = `SELECT * FROM item WHERE catergory ='${parameter}'`
        DB.connection.query(query, (err, result)=>{
           if(result){
            res.send(result)
           
           }else{
            res.send(err)
           
           }
    }
            )

    }

}
module.exports = GetItems_accto_catergory;