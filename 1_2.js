//initialise express
const { json } = require('express');
const express = require('express');
var app = express();

//Import express libraries to read POST body data
app.use(express.json());
app.use(express.urlencoded());

//Initialise the users
let users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
    {id: 30, name: 'Bob'}
];

//Home page request
//curl http://localhost:3000/
app.get('/', (req,res) => {
    res.send('helloworld.');
});

app.listen(3000, ()=> {
console.log("app started.");
});
