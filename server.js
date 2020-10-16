const express = require('express');
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/', (req, res)=>{
  res.send('The API works!');
})

app.post('/api/forma', (req,res) => {
  let data = req.body;
  let smtpTransport = nodemailer.createTransport({
    service:'Gmail' ,
    port:465,
    auth:{
      user:'lmuseau@gmail.com',
      pass:"exion310"
    }
  });
  let mailOptions={
    from:data.email,
    to:'lmuseau@gmail.com',
    subject:`Message from ${data.firstName} ${data.lastName}`,
    html:`
    <h3>Information</h3>
    <ul>
      <li>Name: ${data.firstName} ${data.lastName}</li>
      <li>Phone: ${data.phone}</li>
      <li>Email: ${data.email}</li>
      <li>Spouse Name: ${data.spouseFirstName} ${data.spouseLastName}</div>
      <li>Spouse Phone: ${data.spousePhone}</li>
      <li>Spouse Email: ${data.spouseEmail}</li>
      <li>Preferred Contact: ${data.preferredContact}</li>
      <li>Address: ${data.address1} ${data.address2} ${data.city} ${data.state} ${data.zip}
    </ul> 
    `
  };
  smtpTransport.sendMail(mailOptions, (error, response)=>{
    if(error){
      res.send(error)
    }
    else{
      res.send('Success')
    }
    smtpTransport.close();
  })
})


const PORT = process.env.PORT||3001;

app.listen(PORT,()=>{
    console.log(`server listening at port ${PORT}`);
    
})