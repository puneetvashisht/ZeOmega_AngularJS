const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

// parse application/json
app.use(bodyParser.json())

var courses = ['Angular', 'React', 'CanJS']

//Produces data
app.get("/courses", function(req, res){
    res.json(courses)
})
// Consume and produce data .. json
app.post("/courses", function(req, res){
    console.log(req.body);
    courses.push(req.body.name);
    res.json(courses)
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))