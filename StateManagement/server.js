
// modules
const express = require("express");
const fs = require("fs");
const expressSession = require("express-session");
const app = express();
const oneday = 1000 * 60 * 60 * 24;


// middleware configuration
var sessinMiddleWare = expressSession({
  secret: "cart",
  saveUninitialized: true,
  cookie: { maxAge: oneday },
  resave: false,
});
app.use(sessinMiddleWare);

// global variable declaration for storing file data read from products.json file
var productData=[];
// file name on which operation perform
var fileName = "products.json";
// read data from file
  fs.readFile(fileName, (err, data) => {
    productData = JSON.parse(data.toString());
    console.log(productData);
  });

// rest Api
  app.get('/',(req,res)=>{
    res.send("<h1>Welcome to the product store!</h1>");
  });


// rest Api for getting data of cart
app.get("/api/cart", (req, res) => {
    if (req.session.cart) 
    {
        res.send(req.session.cart);
    } 
    else 
    {
        req.session.cart = [];
        res.send(req.session.cart);
    }
});

// rest Api for adding new data to cart
app.get("/api/addToCart/:id", (req, res) => {
    // get product id
    var id = req.params.id;
    // get the product detail by itd id to add to cart
    var product = productData.find((p) => p.id === id);

    // check product is available or not
     if (!product) 
    {
        res.send("<h1>there is no such product</h1>");
    } 
    else 
    {
        const item = {
                id: id,
                productName: product.productName,
                price: product.price,
        };
    // adding product to cart
    req.session.cart.push(item);
    res.send("<h1>your product added to the cart</h1>");
  }
});


app.get('/api/removeFromCart/:id',(req,res)=>{
  // get the product detail by itd id to remove from cart
  var id = req.params.id;

    if (req.session.cart)
    {
        // 
        req.session.cart = req.session.cart.filter((product) => product.id !== id);
        res.send("<h1>your product removed from cart</h1>");
    } 
    else 
    {
        res.send("<h1>cart does not contain this product</h1>");
    }
});



app.get("/api/checkout", (req, res) => {
  req.session.destroy((err)=>{
    if(err)
        {
            res.send("<h1>Failed to destroy session</h1>");
        }
        else
        {
            res.send("<h1> destroy session. cart successfully checkout</h1>");
        }
  });
   
});

app.listen(5050, () => {
  console.log("server is listen at port:5050");
});
