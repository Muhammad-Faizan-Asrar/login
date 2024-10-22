const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 2812

let users = [
    {
        email : "abc@gmail.com",
        password : 1234
    },

    {
        email : "abc1@gmail.com",
        password : 1234
    },
]

app.use(bodyParser.json());

app.post('/faizan', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let a = false;

    for (const user of users) {
        if(email == user.email && password == user.password){
            a = true;
        }
    }
    if(a){
        res.status(200).send("login");
    } else {
        res.status(200).send("invalid miail or pswrd");
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})