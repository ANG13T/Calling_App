
const dotenv = require('dotenv');
const express = require("express");
const app = express();
const cors = require('cors');

dotenv.config()

app.use(cors());

app.use(express.json());

let authToken = process.env.AUTHTOKEN;
let accountSid = process.env.ACCOUNTSID;

const client = require('twilio')(accountSid, authToken);


app.post('/call', (req, res) => {
  console.log("recieved request", req.body)
  client.calls
  .create({
     url: 'http://demo.twilio.com/docs/classic.mp3',
     to: req.body.phoneNumber,
     from: '+12056357385'
   })
  .then(call => console.log(call.sid));
})


app.listen(1832, (err) => {
  err ? console.log("err" + err) : console.log("app is running")
})

