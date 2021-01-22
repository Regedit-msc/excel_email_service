
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
    <!doctype html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
        <title>
        </title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">

        .message {
            background-color: white;
            padding: 30px
        }
          #outlook a{padding: 0;}
                      .ReadMsgBody{width: 100%;}
                      .ExternalClass{width: 100%;}
                      .ExternalClass *{line-height: 100%;}
                      body{margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}
                      table, td{border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
                      img{border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic;}
                      p{display: block; margin: 13px 0;}
        </style>
        <!--[if !mso]><!-->
        <style type="text/css">
          @media only screen and (max-width:480px) {
                                @-ms-viewport {width: 320px;}
                                @viewport {	width: 320px; }
                          }
        </style>
        <!--<![endif]-->
        <!--[if mso]> 
            <xml> 
                <o:OfficeDocumentSettings> 
                    <o:AllowPNG/> 
                    <o:PixelsPerInch>96</o:PixelsPerInch> 
                </o:OfficeDocumentSettings> 
            </xml>
            <![endif]-->
        <!--[if lte mso 11]> 
            <style type="text/css"> 
                .outlook-group-fix{width:100% !important;}
            </style>
            <![endif]-->
        <style type="text/css">
          @media only screen and (max-width:480px) {
          
                        table.full-width-mobile { width: 100% !important; }
                          td.full-width-mobile { width: auto !important; }

          }
          @media only screen and (min-width:480px) {
          .dys-column-per-100 {
              width: 100.000000% !important;
              max-width: 100.000000%;
          }
          }
          @media only screen and (min-width:480px) {
          .dys-column-per-100 {
              width: 100.000000% !important;
              max-width: 100.000000%;
          }
          }
          @media only screen and (min-width:480px) {
          .dys-column-per-100 {
              width: 100.000000% !important;
              max-width: 100.000000%;
          }
          }
          @media only screen and (min-width:480px) {
          .dys-column-per-60 {
              width: 60% !important;
              max-width: 60%;
          }
          .dys-column-per-40 {
              width: 40% !important;
              max-width: 40%;
          }
          }
        </style>
      </head>
      <body>
        <div>
          <!--[if mso | IE]>
    <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
    <![endif]-->
          <div style='margin:0px auto;max-width:600px;'>
            <table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'>
              <tbody>
                <tr>
                  <td style='direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;'>
                    <!--[if mso | IE]>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
    <![endif]-->
                    <div class='dys-column-per-100 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'>
                      <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>
                        <tr>
                          <td align='center' style='font-size:0px;padding:10px 25px;word-break:break-word;'>
                            <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:collapse;border-spacing:0px;'>
                              <tbody>
                                <tr>
                                  <td style='width:333px;'>
                                    <img alt='Welcome!' height='303' src='https://www.sendwithus.com/assets/img/emailmonks/images/banner.jpg' style='border:0;display:block;font-size:13px;height:303px;outline:none;text-decoration:none;width:100%;' width='333' />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <!--[if mso | IE]>
    </td></tr></table>
    <![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]>
    </td></tr></table>
    <![endif]-->
          <!--[if mso | IE]>
    <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
    <![endif]-->
          <div style='margin:0px auto;max-width:600px;'>
            <table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'>
              <tbody>
                <tr>
                  <td style='direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;'>
                    <!--[if mso | IE]>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
    <![endif]-->
                    <div class='dys-column-per-100 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'>
                      <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>
                        <tr>
                          <td align='center' style='font-size:0px;padding:10px 25px;word-break:break-word;'>
                            <div style='color:#30373b;font-family:Open Sans, Arial, sans-serif;font-size:15px;font-weight:bold;line-height:18px;text-align:center;'>
                               You have a new mail from  ${req.body.name} whose email is ${req.body.email}.
                              <br>
                              This message is from the excel tutors website.
                            </div>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <!--[if mso | IE]>
    </td></tr></table>
    <![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]>
    </td></tr></table>
    <![endif]-->
          <!--[if mso | IE]>
    <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
    <![endif]-->
          <div style='margin:0px auto;max-width:600px;'>
            <table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'>
              <tbody>
                <tr>
                  <td style='direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;'>
                    <!--[if mso | IE]>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
    <![endif]-->
                    <div class='dys-column-per-100  message   outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'>
                      <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>
                        <tr>
                          <td align='center' style='font-size:0px;padding:10px 25px;word-break:break-word;'>
                            <div style='color:#999999;font-family:Open Sans, Arial, sans-serif;font-size:15px;line-height:22px;text-align:center;'>
                            Message Content:<br>
                              ${req.body.message}
                            </div>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <!--[if mso | IE]>
    </td></tr></table>
    <![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]>
    </td></tr></table>
    <![endif]-->
          <table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#30373b;background-color:#30373b;width:100%;'>
            <tbody>
              <tr>
                <td>
                  <div style='margin:0px auto;max-width:600px;'>
                    <table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'>
                      <tbody>
                        <tr>
                          <td style='direction:ltr;font-size:0px;padding:2px;text-align:center;vertical-align:top;'>
                            <!--[if mso | IE]>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:360px;">
    <![endif]-->
                            <div class='dys-column-per-60 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'>
                              <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>
                                <tr>
                                  <td align='left' style='font-size:0px;padding:10px 25px;word-break:break-word;'>
                                    <div style='color:#848789;font-family:Open Sans, Arial, sans-serif;font-size:12px;line-height:18px;text-align:left;text-decoration:none;'>
                                      This service is offerered by Efusanya Ayomide.
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </div>
                            <!--[if mso | IE]>
    </td><td style="vertical-align:top;width:240px;">
    <![endif]-->
                            <div class='dys-column-per-40 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'>
                              <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>
                                <tr>
                                  <td align='right' style='font-size:0px;padding:10px 25px;word-break:break-word;'>
                                    <div style='color:#848789;font-family:Open Sans, Arial, sans-serif;font-size:12px;line-height:18px;text-align:right;text-decoration:none;'>
                                      <a href style='text-decoration:underline; color:#848789;' target='_blank'>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </div>
                            <!--[if mso | IE]>
    </td></tr></table>
    <![endif]-->
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  `;
    ///-------------------------------

    console.log(process.env.USERNAME);
    console.log(process.env.PASSWORD);
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
        html: output
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