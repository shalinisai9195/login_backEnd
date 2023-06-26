require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connect = require('./db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');


//connection DB
connect();

//middleware
app.use(express.json());
app.use(cors());

//Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);


const port = process.env.PORT ||8080;
app.listen(port, ()=> console.log(`App listing on Port ${port}..`))