let message = prompt("What Message would you like to send?","");

// Twilio Credentials 
const accountSid = 'AC24b3c0ad866586038e4f5ca818ae30ed';
const authToken = '3bab3d6d5bef27855cfb5bada3c39346'; 
//require the Twilio module and create a REST client 
const client = require('twilio')(accountSid, authToken); 
client.messages
  .create({
    to: '+14077583284',
    from: '+14079019282',
    body: message,
  })
  .then((message) => console.log(message.sid));
