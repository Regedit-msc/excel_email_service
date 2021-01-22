
///-------------------------------
const express = require('express');
const app = express();
const dotenv = require('dotenv');
var cors = require('cors');
const nodemailer = require('nodemailer');
///-------------------------------

///-------------------------------
let PORT = process.env.PORT || 3000;
///-------------------------------

///-------------------------------
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
///-------------------------------


///---- Config--------------------
dotenv.config({path: './config/config.env'})
///--------------------------------

///-------------------------------
app.post('/mail', cors(), (req, res) => {

    ///-------------------------------
    console.log(req.body);
    ///-------------------------------

    ///-------------------------------
    const output = `
    <p>You have a new mail from the excel website !!!</p>
    <h3> Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
     
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;
    ///-------------------------------


    ///-------------------------------
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:process.env.USERNAME ,
            pass: process.env.PASSWORD,
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    });
    ///-------------------------------

    ///-------------------------------
    var mailOptions = {
        from: `${req.body.email}`,
        to: process.env.USERNAME,
        subject: `Mail from ${req.body.name}`,
        text: output
    };
    ///-------------------------------


    ///-------------------------------
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(404).json({ message: "Unable to send mail" })
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: "Your mail has been sent." })
        }
    });
    ///-------------------------------

})

///-------------------------------
app.listen(PORT, function () {
    console.log('App listening for requests', PORT);
})
///-------------------------------