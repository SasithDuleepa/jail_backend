const DB = require('../../config/database');

const AddUser = (req, res) => {

    console.log(req.body)
    const {firstname,lastname,mobilenumber,email,password} = req.body;
    if(firstname==='' || lastname==='' || mobilenumber==='' || email==='' || password==='' ){
      return res.status(400).send('fill all the fields.');
    }else{
        const query = `INSERT INTO user (first_name, last_name,mobile_no,password,email ) VALUES ('${firstname}', '${lastname}','${mobilenumber}', '${password}','${email}')`;
        DB.connection.query(query, (err, result) => {
            if (err) {
            console.error(err);
            return res.status(500).send('Error adding item.');
          }
          
          res.send('Item added successfully.');
        }
        );
    }
    

    
  };
  
  module.exports = AddUser;