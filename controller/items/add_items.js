const DB = require('../../config/database');

const AddItems = (req, res) => {
    const {item_name, price,description,img_name, catergory}= req.body;
    console.log(req.body)
  
    let filename = 'null'; // Default filename if no file is uploaded
  
    if (req.files && req.files.length > 0) {
      filename = req.files[0].filename;
      console.log(filename)
    }
  
    if(!item_name && !price && !description && !img_name && !catergory){
      return res.status(400).send('fill all the fields.');
    }else{
      const query = `INSERT INTO item (item_name, price,description,img_name,catergory ) VALUES ('${item_name}', '${price}','${description}', '${filename}','${catergory}')`;
  
    DB.connection.query(query, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error adding item.');
      }
      
      res.send('Item added successfully.');
    });
  
    }
  
    
  };
  
  module.exports = AddItems;
  