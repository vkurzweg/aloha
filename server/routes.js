const express = require('express');
const router = express.Router();
const firebase = require('firebase');
const nodemailer = require('nodemailer');
const directTransport = require('nodemailer-direct-transport');
const request = require('request');


router.post('/contactus', handleSendMail);

function handleSendMail(req, res){
  console.log(req.body);
//   // const transporter = nodemailer.createTransport({
//   //       service: 'Gmail',
//   //       auth: {
//   //           user: 'victoriakdunham@gmail.com', // Your email id
//   //           pass: 'pr3ttychakra', // Your password
//   //       }
//   //   });

//   // const mail = {
//   //   from: req.body.email,
//   //   to: 'victoriakdunham@gmail.com',
//   //   subject: 'New Website Message',
//   //   html: '<p>name: ' + req.body.name +'</p>' + '<p>email: ' + req.body.email + '</p>' + '<p>number: ' + req.body.cellNumber +'</p>' + '<p>message: ' + req.body.message + '</p>'
//   // }

//   // // var messagesRef = firebase.database.ref('/messages');


//   // transporter.sendMail(mail, function(error, response){
//   //   if(error){
//   //       console.log(error);
//   //   }else{
//   //       console.log("Message sent: " + response.accepted, response.rejected, response.messageId);
//   //   }
//   //  transporter.close();
//   // });
}

module.exports = router;
