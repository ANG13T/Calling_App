
const dotenv = require('dotenv');
const express = require("express");
const app = express();

dotenv.config({"path": ".env"})

let authToken = process.env.AUTHTOKEN;
let accountSid = process.env.ACCOUNTSID;

const client = require('twilio')(accountSid, authToken);


function makeCall(){
  

  client.calls
        .create({
           url: 'http://demo.twilio.com/docs/classic.mp3',
           to: '+13107033228',
           from: '+12056357385'
         })
        .then(call => console.log(call.sid));
}


app.listen(1832, (err) => {
  err ? console.log("err" + err) : console.log("app running")
})

