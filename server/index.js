const express = require('express');
const cors = require('cors');
const app = express();
const DB = require('./DB');
// const request_html = require('./request_html')
app.use(cors());


app.use('/', (req, res) => {
    let dB = new DB;
    dB.db(req, res);
    // let Request_Html = new request_html;
    // Request_Html.html(req , res);
});




// listen to the local server
app.listen(3001, () => {
    console.log("The server has started");
});