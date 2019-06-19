const express = require('express');
const app = express();
const port = process.env.PORT|| 5050


//import mongoose
const mongoose = require('mongoose');

//import database config
const dbConfig = require('./config/dbServer')

//import body parser
const bodyParser = require('body-parser')

//configure mongoose promise
mongoose.Promise = global.Promise;

//connect to database
mongoose.connect(process.env.MONGODB_URI||dbConfig.mongoLocalURL, {
    useNewUrlParser: true
}) .then(() => {
    console.log("You are connected to the database");
}) .catch(error => {
    console.log("Whoops, you've failed to connect to the database", error);
    process.exit()
});

// parse request of content-type - application
app.use(bodyParser.urlencoded({extended: true}))

// parse requests of content-type - application/json
app.use(bodyParser.json())

//swagger
const   swaggerUi = require("swagger-ui-express"),
        swaggerDoc = require("./swagger.json")
app.use("/api/docs", swaggerUi.serve)
app.get("/api/docs",swaggerUi.setup(swaggerDoc))

// define a simple route
app.get('/', (req, res) =>{
    res.send('welcome to express')
} )

app.get('/api/', (req, res) => res.send('this is api '))

// require routes
require('./app/routes/project.route')(app);
require("./app/routes/user.route")(app)
require("./app/routes/post.route")(app)

app.listen(port, () => {
        console.log(`you've started the server`)
    }
)
module.exports = app;