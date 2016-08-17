/**
 * Created by arpit on 17/8/16.
 */

const questionPromise = require('./scrap').quesAns();
const express = require('express');
const app = express();

app.get('/' , (req , res)=>{
    questionPromise.then( function (data) {
        res.send(data);
    });
})

app.listen(8080 , function () {
    console.log('Server is runing on port 8080');
})