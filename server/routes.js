const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const directTransport = require('nodemailer-direct-transport');
const request = require('request');


router.post('/contactus', handleSendMail);

function handleSendMail(req, res){
  console.log('req.body');
  messages.on('child_added', function(snapshot){
    if(!snapshot.val().email_sent){
      console.log(snapshot)
      messages.child(snapshot.key).child('email_sent').set(firebase.database.ServerValue.TIMESTAMP).then(function(res){

        const data = JSON.stringify(snapshot.val(), null, 9)

        const sendInfo = transporter.templateSender({
          subject: 'New contact form message',
          html: {data}
        }, {
          from: 'victoriakdunham@gmail.com',
        });

        sendInfo({
          to: 'victoriakdunham@gmail.com'
        }, {
          data: data,
        }, function(err, info){
          if(err){
            console.log(err)
          } else {
            console.log('Email sent')
          }
        })
      })
    }
  })
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
