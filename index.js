const express = require('express')
const app = express()
var session = require('express-session')
const cors = require('cors')

app.use(express.json())
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "/*");
    res.header("Access-Control-Allow-Methods", 'GET,POST','PUT','DELETE');
    app.use(cors())
    next();
})
app.use(cors())
app.use(express.urlencoded())
app.use(session({
    secret: 'keyboarduuyuyuyu',
    resave: false,
    saveUninitialized: false,
}))

const login = require('./login')
app.use("/", login)

app.listen("5000", console.log("Funcionamento - Perfeito!"))