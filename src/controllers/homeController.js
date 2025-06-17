
const getHomePage = (req, res) => {
    res.sedn('Hello World! & nodemon');
}

const getTestPage = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomePage, getTestPage
};