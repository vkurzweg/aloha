/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();
const nodemailer = require('nodemailer');

// const firebase = require('../../utils/firebase-config');


// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);
// const router = express.Router();
// router.post('/contactus', function(req, res){
//   console.log('route hit', req.body)
// });

function handleSendMail(req, res){
  console.log(req.query);
  // const transporter = nodemailer.createTransport({
  //       service: 'Gmail',
  //       auth: {
  //           user: 'victoriakdunham@gmail.com', // Your email id
  //           pass: 'pr3ttychakra', // Your password
  //       }
  //   });

  // const mail = {
  //   from: req.body.email,
  //   to: 'victoriakdunham@gmail.com',
  //   subject: 'New Website Message',
  //   html: '<p>name: ' + req.body.name +'</p>' + '<p>email: ' + req.body.email + '</p>' + '<p>number: ' + req.body.cellNumber +'</p>' + '<p>message: ' + req.body.message + '</p>'
  // }

  // // var messagesRef = firebase.database.ref('/messages');


  // transporter.sendMail(mail, function(error, response){
  //   if(error){
  //       console.log(error);
  //   }else{
  //       console.log("Message sent: " + response.accepted, response.rejected, response.messageId);
  //   }
  //  transporter.close();
  // });
}

const routes = require('./routes');
app.use('/contactus', handleSendMail);


// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const port = argv.port || process.env.PORT || 3000;

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
