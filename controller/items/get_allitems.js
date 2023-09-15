const DB = require('../../config/database');



const GetAll = (req, res) => {
    const query = `SELECT * FROM item`
    DB.connection.query(query, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    })
}

module.exports = GetAll;