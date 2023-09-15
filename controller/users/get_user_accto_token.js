var jwt = require('jsonwebtoken');
const User = (req,res)=>{
    // console.log(req.body)
    const token = req.body.token;




    try {
        var decoded = jwt.verify(token, 'secretkey');
        res.send({error:false,decoded:decoded}); // bar
        // ...
      

      } catch(err) {
        console.log(err)
        res.send({erro:true})  
      }
}
module.exports = User;