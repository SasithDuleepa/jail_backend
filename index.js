const express = require('express');
require('dotenv').config()
const cors = require('cors');
const bodyParser = require('body-parser');
const DB = require('./config/database');



const app = express();

DB.connect();


app.listen( process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);

})