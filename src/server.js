require('dotenv').config()
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const mysql = require('mysql2');
const connection = require('./config/database');


const app = express()
const port = process.env.PORT || 3300;  
const hostname = process.env.HOST_NAME;


//config template engine & static files
configViewEngine(app);

// route
app.use('/', webRoutes);

// test database connection

connection.query(
  'select * from Users u;',
  function (err, results, fields) {
    console.log(" >>> results home page = ", results);
  }
)


app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})