/**
 * Created by piyush on 17/8/16.
 */
'use strict';
const express = require('express');
// const socketio = require('socket.io');
// const http = require('http');
// const questionPromise = require('./scrap').quesAns();

const app = express();
<<<<<<< HEAD
const path = require('path');

app.use("/" , express.static( path.join( __dirname , "public_html") ) );
=======
// const server = http.Server(app);

// const io = socketio(server);

app.set('port', process.env.port || 3000);
app.use('/', express.static(__dirname + '/public_html'));
>>>>>>> f9d156f565b742d8bc137fe529009e1c688a2dc1

// app.get('/' , function(req , res){
//     questionPromise.then( function (data) {
//         res.send(data);
//     });
// });

<<<<<<< HEAD

app.listen(8080 , function () {
    console.log('Server is runing on port 8080');
})
=======
app.listen(app.get('port') , function () {
    console.log('Server is runing on port:' + app.get('port'));
    console.log('https://localhost:' + app.get('port'));
});
>>>>>>> f9d156f565b742d8bc137fe529009e1c688a2dc1
