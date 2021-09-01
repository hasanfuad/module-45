const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());


const friendList = ['Hasib', 'Rahim', 'Karim', 'Tariq'];

// get

app.get('/friend/:id', (req, res)=>{
    const userId = req.params.id;
    const name = friendList[userId];
    res.send({userId, name});
});

// post

app.post('/addUser', (req, res)=>{
    const user = req.body;
    user.id = 27;
    res.send(user);
})


app.listen('3000', ()=>{
    console.log("Server is running on 3000");
})