// modules
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

// gloabal application object
const app = express();

// middleware configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure static middleware for getting html, css, js as static web resource
app.use(express.static("public"));

// database configuration
var conUrl = {
  host: "localhost",
  user: "root",
  password: "root123",
  database: "banking",
};

//database connection
const connection = mysql.createConnection(conUrl);
connection.connect((err) => {
  if (!err) 
  {
    console.log("connection establish");
  }
  else 
  {
    console.log("error");
  }
});

//http requrest handling mapping
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

// login api
app.post("/login", (req, res) => {
  let userData = req.body;
  var folderPath = "A:\\TAP\\GitHub\\NodeJs\\WebApplication\\public";

  let command = "SELECT * FROM credentials WHERE email = ?";
  connection.query(command, [userData.email], (err, rows, fields) => {
    if (rows.length > 0) 
      {
      var data = rows[0];
      if (data.email == userData.email && data.password == userData.password) 
      {
        res.sendFile("welcome.html", { root: folderPath });
      } 
      else 
      {
        res.sendFile("register.html", { root: folderPath });
      }
    } 
    else 
    {
      console.log("error");
      res.sendFile("register.html", { root: folderPath });
    }
  });

});


// registration api
app.post("/register", (req,res)=>{
   var folderPath = "A:\\TAP\\GitHub\\NodeJs\\WebApplication\\public";
  let urlData=req.body;

  let command = "insert into credentials(email,password) values(?,?)";
  connection.query(command,[urlData.email,urlData.password],(err,rows,fields)=>{
    if (!err) 
    {
      res.sendFile("login.html", { root: folderPath });
    } 
    else
    {
      res.sendFile("register.html", { root: folderPath });
    }
  });
});

// set server on listen mode
app.listen(2020);
console.log("server running on port number 2020");
