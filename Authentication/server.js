//modules
const express=require("express");
const bodyParser=require('body-parser');
const fs=require("fs");

var app=express();
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    var htmlstring="<h1>welcome to hr application</h1>"+
                    "<hr/>"+
                    "<ol>"+
                    "<li>about us</li>"+
                    "<li>contact us</li>"+
                    "</ol>";
    res.send(htmlstring);
});


app.get("/api/hello",(req,res)=>
{
        res.send("<h1>hello from server</h1>");
});

// get all data api
app.get("/api/people",(req,res)=>
{
        var fileName = "data.json";
        fs.readFile(fileName,(err,data)=>
        {
            var members=JSON.parse(data.toString());
            res.send(members);
        });
});

// get data by id api
app.get("/api/people/:id",(req,res)=>
{
    var fileName = "data.json";
    var dataToBeSerach=req.params.id;
    fs.readFile(fileName,(err,data)=>
    {
        var members=JSON.parse(data.toString());
        var yourData = members.find((person) => person.id == dataToBeSerach);
        res.send(yourData)
    });
});

// update data api
app.put("/api/people/:id",(req,res)=>
{
    var filename="data.json";
    var dataToBeUpdate=req.params.id;
    fs.readFile(filename,(err,data)=>
    {
        var members=JSON.parse(data.toString());
        members=members.filter((person)=>(person.id!= dataToBeUpdate));
        var urldata=req.body;
        members.push(urldata);
        var jsondata=JSON.stringify(members);
        fs.writeFile(filename,jsondata,()=>
        {
            res.send("data updated successfully..");
        });

    });
});

// delete data api
app.delete("/api/people/:id",(req,res)=>
{
    var filename="data.json";
    var dataToBeDelete=req.params.id;
    fs.readFile(filename,(err,data)=>
    {
        var members=JSON.parse(data.toString());
        members = members.filter((person) => person.id != dataToBeDelete);
        var jsondata=JSON.stringify(members);
        fs.writeFile(filename,jsondata,()=>
        {
            res.send("data deleted successfully..");
        })

    })
})

//login to credentials api
app.post("/api/login", (req, res) => 
{
  let url = req.url;
  let getData = req.body;
  var fileName = "credentials.json";

    fs.readFile(fileName, (err, data) => 
    {
        var people = JSON.parse(data.toString());
        var yourdata = people.find((member) => member.email === getData.email);

        if (yourdata && yourdata.password && getData.password) 
        {
            res.send("welcome " + yourdata.email);
        } 
        else 
        {
            console.log("Invalid user");
        }
    });
});

//register new user in credentails
app.post("/api/register", (req, res) => 
{
    var fileName = "credentials.json";
    let url = req.url;
    let getData = req.body;
    fs.readFile(fileName,(err,data)=>
    {
        var people=JSON.parse(data.toString());
        people.push(getData);
        var jsonData=JSON.stringify(people);
        fs.writeFile(fileName,jsonData,()=>
        {
          res.send("new user registered into credentials");
        })
    });
});


//server start at port number 6060
app.listen(6060);
console.log("server is listening at port number 6060");