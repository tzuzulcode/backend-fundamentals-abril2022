const nodemailer = require("nodemailer");
const { emailHost, emailPort, emailUsername, emailPassword } = require("../config");



let transporter = nodemailer.createTransport({
    host: emailHost,
    port: emailPort,
    secure: true, // true for 465, false for other ports
    auth: {
      user: emailUsername, // generated ethereal user
      pass: emailPassword, // generated ethereal password
    },
});

transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });


// module.exports = transporter.sendMail.bind(transporter)
module.exports = transporter