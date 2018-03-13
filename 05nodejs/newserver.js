//CommonJS implementation   - no module loading features in JS
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const cors = require('cors')

// parse application/json
app.use(bodyParser.json())
app.use(cors())

// Consume and produce data .. json
app.post("/authenticate", function(req, res){
    console.log(req.body.email);
    console.log(req.body.pwd);
    if(req.body.email == req.body.pwd){
        res.json({auth: true})
    }
    else{
        res.json({auth: false})
    }
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))