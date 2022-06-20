const express = require('express');
const app = express();
const port = process.env.PORT || 5000

app.get('/', (req, res)=>{
    res.send('hello Mainuddin sani')
})


app.get('/sani', (req,res)=>{
    res.send({id: 1, name: "mainuddin sani"})
})

const users = [
    {id: 1,  name: "sani", jobs: "frontend"},
    {id: 2,  name: "kasi", jobs: "backend"},
    {id: 3,  name: "mani", jobs: "ui / ux"},
    {id: 4,  name: "sani", jobs: "CEO"},
]


app.get('/sani/:id', (req,res)=>{
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    console.log(req.params);
    res.send(user);
})

app.listen(port, ()=>{
    console.log('Listening to port', port);
})