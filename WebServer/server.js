// modules
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

// gloabal application object
const app = express();

// middleware configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure static middleware for getting html, css, js as static web resource
app.use(express.static("public"));

//http requrest handling mapping
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.post("/login", (req, res) => {
  let url = req.url;
  let userData = req.body;
  let fileName = "credentials.json";
  fs.readFile(fileName, (err, data) => {
    var folderPath = "A:\\TAP\\GitHub\\NodeJs\\WebServer\\public";
    let streCredentials = data.toString();
    let credentials = JSON.parse(streCredentials);
    let userFound = credentials.find((user) =>user.email === userData.email && user.password === userData.password);
    if (userFound) {
      res.sendFile("welcome.html",{root: folderPath});
    } else {
      res.sendFile("register.html", { root: folderPath });
    }
  });
});

app.post("/register", (req,res)=>{
   var folderPath = "A:\\TAP\\GitHub\\NodeJs\\WebApp\\public";
  let urlData=req.body;
  let filename="credentials.json";
  fs.readFile(filename,(err,data)=>{
    var credentials=JSON.parse(data.toString());
    urlData.id = credentials.length + 1;
    credentials.push(urlData);
    var yourData=JSON.stringify(credentials);
    fs.writeFile(filename,yourData,()=>{
      res.sendFile("login.html", {root: folderPath});
    });
  });
});



// set server on listen mode
app.listen(2020);
console.log("server running on port number 2020");
