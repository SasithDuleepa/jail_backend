const DB = require('../config/database');
var jwt = require('jsonwebtoken');

const Login = (req, res) => {

    const { mobile_no, password} = req.body;
    if( mobile_no === '' || password === ''){
        
        res.status(400).send('fill all the fields.');
    }else{
        const query = `SELECT * FROM user WHERE mobile_no ='${mobile_no}' AND password ='${password}'`
        DB.connection.query(query, (err, result)=>{
            if(result.length>0){
                // console.log(result[0])
                let user = result[0];
                let token = jwt.sign({user_id: user.user_id,user_name: user.first_name}, 'secretkey', { expiresIn: '1h' });

           
                
                res.status(200).send({
                    user_id: user.user_id,
                    user_name: user.first_name,
                    user_role: "user",
                    token: token
                })
            }else{
                res.status(200).send({error:true});
            }
        }
        )
    }
    
}






module.exports = Login;