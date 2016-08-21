/**
 * Created by piyush on 17/8/16.
 */
'use strict';
const express = require('express');
// const socketio = require('socket.io');
// const http = require('http');
// const questionPromise = require('./scrap').quesAns();

const app = express();
// const server = http.Server(app);

// const io = socketio(server);

app.set('port', process.env.port || 3000);
app.use('/', express.static(__dirname + '/public_html'));

// app.get('/' , function(req , res){
//     questionPromise.then( function (data) {
//         res.send(data);
//     });
// });

app.listen(app.get('port') , function () {
    console.log('Server is runing on port:' + app.get('port'));
    console.log('https://localhost:' + app.get('port'));
});