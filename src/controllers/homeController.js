const connection = require('../config/database');

const getHomePage = (req, res) => {

    let users = [];

    connection.query(
  'select * from Users u;',
  function (err, results, fields) {
    users = results;
    console.log(" >>>results home page = ", results);
    
    console.log(" >> check users: ", users)
    res.sedn('Hello World! & nodemon');
  }
);

}


const getTestPage = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomePage, getTestPage
};