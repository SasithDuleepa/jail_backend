const express = require('express');
require('dotenv').config()
const cors = require('cors');
const bodyParser = require('body-parser');
const DB = require('./config/database');

const Items = require('./routes/itemsRoutes');
const Users = require('./routes/userRoutes');

const User = require('./controller/users/get_user_accto_token');
const Login= require('./controller/login');

const app = express();

DB.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin: 'http://localhost:3000',}));
app.use(express.json()); 

app.use('/items', Items);
app.use('/users', Users);

app.post('/login', Login);

app.post('/user', User);


app.listen( process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);

})