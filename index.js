const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());


app.get('/', (req, res) => {
    res.send("Hello");
});

const friendList = ["Moniyem", "Hasib", "Tariq", "Wasif"];

app.get('/friend/:id', (req, res) => {
    const user = req.params.id;
    const name = friendList[user];
    res.send({user, name});
})

app.listen('3000', ()=>{
    console.log("Server is listening from 3000");
})