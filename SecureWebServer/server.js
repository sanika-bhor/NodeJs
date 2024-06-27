// modules
const express=require('express');
const bodyParser=require('body-parser');
const jwt=require('jsonwebtoken');
const app=express();

// middleware configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
 let jwtSecreteKey="transflowerLearning";

//  http request
app.get("/",(req,res)=>{
    res.send("<h1>hello , i am sanika</h1>");
});

// secure rest Api
app.get('/api/orders',(req,res)=>{
    var auth="authentication";
    var token=req.header(auth);
    //verify token 
    var extractToken=jwt.verify(token,jwtSecreteKey);

    // orders details
    var orders = [
      { "id": 1, "date": "1/2/2024", "total": 52300, "status": "intransmit" },
      { "id": 2, "date": "11/12/2024", "total": 52300, "status": "processed" },
      { "id": 3, "date": "30/8/2024", "total": 52300, "status": "processed"},
      { "id": 4, "date": "12/6/2024", "total": 52300, "status": "intransmit" },
      { "id": 5, "date": "25/3/2024", "total": 52300, "status": "processed" }
    ];

// if requested client match then only order data display
    if(extractToken.client=="bhorsanika0239@gmail.com")
    {
        res.send(orders);
    }
    else
    {
        res.send("unauthorized request");
    }

});

// api for checking valid user
app.post("/api/login",(req,res)=>{
    var userData=req.body;
    // if email and password match then only secure token generate
    if(userData.email=="bhorsanika0239@gmail.com" && userData.password=="sanika")
    {
        var data={
            time:Date(),
            client: userData.email
        }
        // genrate token
        var token=jwt.sign(data,jwtSecreteKey);
        // display token 
        res.send(token);
    }
    else
    {
        res.send("failed to generate token !! user not found");
    }
});

// server listen at port
app.listen(6060,()=>{
    console.log("server are listen at port number 6060");
});