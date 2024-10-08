# <p align="center">NodeJs Notes</p>
----------------------------------------------------------------------------------------------------------------------------------------------
<!------------------------------------------------------------->

## * Coding Principles:-
 coding principles that can help you write clean, maintainable, and scalable code
<hr>
 


 
### ➡  Separation of Concerns (SoC):
Separation of Concerns (SoC) is a software design principle that aims to divide a computer program into distinct sections, each addressing a separate concern. A "concern" refers to a specific aspect of a program's functionality or responsibility. By adhering to SoC, you can create more maintainable, scalable, and understandable code.

### Example:
In a web application, you might separate the data access logic Layer (DAL layer), business logic (Service layer), and presentation logic (UI layer).
<hr>


### ➡  Hollywood Principle:
The Hollywood Principle, often phrased as "Don't call us, we'll call you," is a software design principle that emphasizes a form of inversion of control. Instead of an application calling various components to perform actions, the components themselves will call into the application as needed. This principle helps create loosely coupled components and makes the system more modular and easier to maintain.

### Example:
In Express, middleware functions are an example of the Hollywood Principle. The framework calls your middleware functions, rather than your application calling the framework.
<hr>


### ➡   Don't Repeat Yourself (DRY):
The DRY principle, which stands for "Don't Repeat Yourself," is a fundamental software development concept that aims to reduce repetition of code and information. By adhering to DRY, developers can create more efficient, maintainable, and readable codebases.

### Example:
If multiple classes share the same functionality, abstract that functionality into a separate utility class or a method that can be reused.
<hr>

### ➡  Keep It Simple, Stupid (KISS):
The KISS principle stands for "Keep It Simple, Stupid." It emphasizes simplicity and straightforwardness in design and implementation. The goal is to avoid unnecessary complexity and keep things as simple as possible.

### Example:
We'll build a basic Node.js application using the Express framework to demonstrate the KISS principle.
- Project Structure
- Basic Server Setup
- Simple Route Handlers

### ➡  SOLID Principal:
The SOLID principles are a set of design guidelines that help developers create software that is more maintainable, scalable, and easier to understand. These principles can be applied to Node.js development to create robust applications. Here's a simple explanation of each principle with examples:

### 1. S: Single Responsibility Principle (SRP):
A class or module should have one, and only one, reason to change, meaning it should have only one job or responsibility.

**Example:**

Suppose you have a class that handles both database operations and email notifications. According to SRP, you should split this class into two separate classes: one for database operations and another for sending emails.

### 2. O: Open/Closed Principle (OCP):
Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.

**Example:**

You should be able to add new functionality without changing the existing code. This can be achieved using inheritance or interfaces.

### 3. L: Liskov Substitution Principle (LSP):
Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.

**Example:**

 A subclass should behave in such a way that it can replace its superclass without causing errors.

### 4. I:Interface Segregation Principle (ISP):
A client should not be forced to implement interfaces it doesn't use. Instead of one fat interface, many small, specific interfaces are preferable.

**Example:**

If you have a large interface with many methods, split it into smaller, more specific interfaces that only include methods relevant to the client.

### 5. D: Dependency Inversion Principle (DIP):
High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g., interfaces). Also, abstractions should not depend on details. Details should depend on abstractions.

**Example:**

 Instead of a high-level class directly depending on a low-level class, both should depend on an abstraction, like an interface or a service.

<!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------

## * Node.js Modules:- 
Modules in Node.js are reusable pieces of code that can be imported and used in other files. This helps in keeping your code organized and easier to manage.

### Types of Modules:
- **Built-in Modules**: Node.js comes with several built-in modules, like fs (file system), http, path, etc.
- **User-defined Modules**: These are custom modules created by the user with the help of exporting function.
- **Third-party Modules**: Modules created by the community and available via npm (Node Package Manager).

### Syntax:
```javascript
var express = require("express");
```

<!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------
## * Exporting Function:-
Exporting in Node.js means making functions or variables available for use in other files. This is done using the 'module.exports' or 'exports' object.

### Syntax:
```javascript
exports.sayHello = function() {
    console.log("Hello from the handler module!");
};
```
<!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------

## * Callback Functions:-
- A callback function is a function passed into another function as an argument, which is then executed inside the outer function to complete some kind of routine or action.
- Callbacks are used to handle asynchronous operations.
- They ensure that code runs only after a certain task has completed, preventing blocking of other operations.

### Syntax:
```javascript
performTask((err, data) => {
    if (err) {
        console.error("Error:", err);
    } else {
        console.log("Data:", data);
    }
});
```
<!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------

## * JSON:-
- JSON (JavaScript Object Notation) is a lightweight data-interchange format.
- It is easy for humans to read and write and easy for machines to parse and generate.
- JSON is commonly used for transmitting data in web applications.

### Example:
```javascript
{
  "name": "Sanika",
  "age": 19,
  "college": "GPA",
  "address": {
    "country": "India",
    "state": "Maharashtra",
    "dist": "Pune"
  }
}
```

### Working with JSON:
- ➡ **JSON.parse()**:

    JSON.parse() is a method in NodeJs that converts a JSON string into a JavaScript object. This is useful when you receive data as a JSON string and need to work with it as a JavaScript object.

   **Snytax**:
  ```javascript
  JSON.parse(data.toString());
   ```

- ➡ **JSON.stringify()**:

    JSON.stringify() is a method in nodeJs that converts a JavaScript object or value to a JSON string. This is useful when you need to send data to a server or save it in a file in JSON format.

    **Snytax**:
   ```javascript
  JSON.stringify(value);
  ```
<!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------
## * read():-
The find method in JavaScript is used to search an array for an element that meets a specified condition. It returns the first element that meets the condition. If no elements meet the condition, it returns undefined.

**Example**:
```javascript
member.find((person) => person.id === id);
```
<!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------

## * filter():-
The filter method in JavaScript creates a new array with all elements that pass the test implemented by the provided function. It is used to filter out elements from an array based on certain criteria.

**Example**:
```javascript
 member.filter((person) => person.id != id);
```
<!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------

## * push():-
The push() method in JavaScript is used to add one or more elements to the end of an array and returns the new length of the array.

**Example**:
```javascript
 members.push(person);
```
<!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------

## * fs Module:-
The fs module in Node.js provides an API for interacting with the file system. It allows you to perform operations such as reading, writing, updating, and deleting files and directories.

**Snytax**:
```javascript
const fs = require('fs');
```

### File Operation:
- ➡ **Reading Files**:
  
   The 'readFile()' method reads a file asynchronously.<br>The 'readFileSync()' method reads a file synchronously.

   **Snytax**:
   ```javascript
  fs.readFile('fileName, (err, data) => {
  if (err) throw err;
  console.log(data);
  });
  ```

- ➡ **Writing Files**:
  
   The 'writeFile' method writes data to a file asynchronously.<brThe 'writeFileSync' method writes data to a file synchronously.

   **Snytax**:
    ```javascript
  fs.writeFile(fileName, dataToBeWrite, (err) => {
  if (err) throw err;
  console.log('File has been saved!');
  });
  ```
 <!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------

## * express Module:- 
Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It is widely used for building RESTful APIs.

**Installing Express**:
```javascript
npm install express
```

### instance of express:
The line var app = express(); initializes a new Express application. This app object is the main component of an Express application and allows you to define routes, middleware, and configuration settings.

**syntax**:
```javascript
var app = express();
```
 <!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------

## * Middleware:-
app.use() is a method in Express used to apply middleware functions to your application. Middleware functions are functions that execute during the lifecycle of a request to the server, and can modify the request and response objects.

**syntax**:
```javascript
app.use(express.json());
```

 <!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------

## * Routing in Express.js:-
Routing in Express.js refers to how an application's endpoints (URIs) respond to client requests. It defines how an application responds to a client request for a specific URI (or endpoint), with a specific HTTP request method (GET, POST, etc.).

**syntax**:
```javascript
// Route for handling GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route for handling POST requests to the '/submit' URL
app.post('/submit', (req, res) => {
  res.send('Form Submitted');
});
```
### Routing Methods:
In Express.js, routing methods correspond to HTTP request methods (such as GET, POST, PUT, DELETE, etc.) and are used to define how the server should respond to client requests for specific routes.

-  #### ➡ **app.get()**:-

    The app.get() method in Express.js is used to define a route handler that responds to HTTP GET requests at a specific route or endpoint on the server. It is one of the most commonly used routing methods in Express for handling GET requests.

   **syntax**:
    ```javascript
   app.get(path, (req,res)=>{
    //handling get request
   });
    ```

- #### ➡ **app.post()**:-

   The app.post() method in Express.js is used to define a route handler that responds to HTTP POST requests at a specific route or endpoint on the server. It allows your Express application to handle incoming data and perform operations based on that data when clients submit forms or send data via POST requests.

  **syntax**:
  ```javascript
  app.post(path, (req,res)=>{
    //handling post request
  });
  ```

- #### ➡ **app.put()**:-

    The app.put() method in Express.js is used to define a route handler that responds to HTTP PUT requests at a specific route or endpoint on the server. It allows your Express application to update resources on the server based on data sent by clients using the HTTP PUT method.

    **syntax**:
  ```javascript
  app.put(path, (req,res)=>{
    //handling post request
  });

   ```

- #### ➡ **app.delete()**:-

   The app.delete() method in Express.js is used to define a route handler that responds to HTTP DELETE requests at a specific route or endpoint on the server. It allows your Express application to delete resources on the server based on data sent by clients using the HTTP DELETE method.

  **syntax**:
  ```javascript
  app.delete(path, (req,res)=>{
    //handling post request
  });
  ```

 <!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------
## * body-parser module:-
The body-parser module in Express.js is a middleware that extracts the entire body portion of an incoming request stream and exposes it on req.body. This module is essential for handling POST, PUT, DELETE, and PATCH requests where data is sent to the server from a form or an API client.

- ### Installation:
    ```javascript
    npm install body-parser
    ```
- ### Integration:
    ```javascript
     const bodyParser = require('body-parser');
    ```
- ### Middleware Setup:
   ```javascript
     app.use(bodyParser.json());
   ```
    bodyParser.json() parses JSON-encoded bodies and populates req.body with the parsed JSON object.

    ```javascript
    app.use(bodyParser.urlencoded({ extended: true }));
   ```
  bodyParser.urlencoded() parses URL-encoded bodies (typically sent by HTML forms) and populates req.body with the parsed data. The extended: true option allows parsing of rich objects and arrays.

<!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------
## * EventEmitter:-
In Node.js, the EventEmitter is a class from the events module that provides a way to handle asynchronous events. It allows you to define and listen to custom events, making it a powerful tool for creating event-driven applications.

- ### ➡ events Module:
   ```javascript
  var eventModule = require("events");
  ```
   The events module in Node.js is a core module that provides a way to work with events, including creating, emitting, and handling events in an asynchronous and event-driven manner.

- ### ➡ EventEmitter Class:
  ```javascript
  var emitter= new eventModule.EventEmitter();
  ```
  The EventEmitter class allows you to create, fire, and listen to custom events.

- ### ➡ addListener() method::
   ```javascript
   emitter.addListener(event, listener);
   ```
    It is used to register an event listener for a specific event. When the event is emitted, all registered listeners for that event will be called in the order they were registered.

- ### ➡ emit() method::
   ```javascript
   emitter.emit(eventName); 
   ```
    The emit method in the EventEmitter class is used to trigger an event. When an event is emitted, all listeners registered for that event are called synchronously, in the order they were registered.


<!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------
## * Database:-
 ### ➡ importing module
- ### mysql module:
  
   The mysql module in Node.js is used to interact with MySQL databases. It provides a simple and powerful way to execute SQL queries and manage database connections.

   **installation:**
  ```javascript
  npm install mysql
  ```
- ### mysql2 module:
  
   The mysql2 module in Node.js is a modern, optimized version of the mysql module. It provides enhanced performance and supports additional features such as prepared statements and promise-based APIs.

  **installation:**
  ```javascript
  npm install mysql2
  ```

### ➡ Configuring the Database Connection
   **syntax:**
  ```javascript
   var conUrl = {
     host: 'localhost',
     user: 'root',
     password: 'password',
     database: 'college'
 };

```
   Configuring the database connection is a crucial step in setting up your Node.js application to interact with a MySQL database. This configuration involves specifying details like the database host, user credentials, and the specific database you want to access.


### ➡ Creating the Database Connection
**syntax:**
```javascript
const connection = mysql.createConnection(conUrl);
```
To create a connection to a MySQL database using the mysql2 module, you use the mysql.createConnection method. This method sets up a connection to the database with the specified configuration.


### ➡ Connecting to the Database
**syntax:**
```javascript
connection.connect((err) => {
    if (!err) {
        console.log("Connection established successfully");
    } else {
        console.log("Error connecting to the database:", str);
    }
});
```
Call the connect method on the connection object to establish a connection to the database. 


###  ➡ performing database operation
**syntax:**
```javascript
connection.query(sql, [values], callback);
```
The query() method of the mysql2 module is used to execute SQL queries against a MySQL database. It allows you to perform various database operations such as SELECT, INSERT, UPDATE, DELETE, and more.




<!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------
## * MVC:-

The Model-View-Controller (MVC) architecture is a design pattern used for developing web applications. It separates an application into three interconnected components: Model, View, and Controller. This separation helps manage the complexity of large applications and promotes organized code.

**Directory Structure:**
```javascript
project
│
├── models
│   └── userModel.js
│
├── views
│   └── userView.ejs
│
├── controllers
│   └── userController.js
│
├── routes
│   └── userRoutes.js
│
└── server.js

```

### ➡ Model:

   In the MVC (Model-View-Controller) architecture, the Model is responsible for managing the data, logic, and rules of the application. It directly interacts with the database or any other data storage system, and it represents the data that is being manipulated and displayed in the application.

### ➡ View:
   In the MVC (Model-View-Controller) architecture, the View is responsible for presenting data to the user and handling user interactions. It is the user interface of the application, displaying data from the Model and sending user commands to the Controller.

### ➡ Controller:
   In the MVC (Model-View-Controller) architecture, the Controller acts as an intermediary between the Model and the View. It handles user input, processes it, and sends commands to the Model to update the data. The Controller also decides which View to display based on the user actions and the state of the application.

###  ➡ Router:
   In the MVC (Model-View-Controller) architecture, the Router is responsible for mapping URLs to the appropriate controller actions. It defines the endpoints and specifies how the application should respond to various HTTP requests.

   **syntax:**
   ```javascript
     app.route('/task').get(userController.getAll)
   ```


<!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------
## * express-session module:-

express-session is a middleware for Express.js that enables session management in web applications. It allows you to store data specific to a user's session and access it across multiple requests. This is particularly useful for scenarios such as user authentication, storing user preferences, and maintaining a shopping cart.

**Installation:**
```javascript
npm install express-session
```

**Importing:**
```javascript
var expressSession=require('express-session');
```


<!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------
## * State Mangement:-

State management is a critical aspect of web application development. It involves managing the state of an application, which includes the data, user interactions, and other relevant information that determines the behavior and appearance of the application. 

### ➡  Session configuration:
**Syntax:**
```javascript
var sessinMiddleWare = expressSession({
  secret: "cart",
  saveUninitialized: true,
  cookie: { maxAge: oneday },
  resave: false,
});
app.use(sessinMiddleWare);
```

- **secret: "cart"**:
  
  A secret key used to sign the session ID cookie, ensuring the session ID is not tampered with on the client side. It should be a random string for security.

- **saveUninitialized: true**:

  Forces a session that is "uninitialized" to be saved to the store. An uninitialized session is a new session that hasn't been modified. This can be useful for implementing login sessions, tracking user interactions, etc.

- **cookie: { maxAge: oneday }**:

  Configures the session cookie. The maxAge property sets the expiration time for the cookie, which in this case is set to one day (24 hours). The value of oneday is defined as 1000 * 60 * 60 * 24 milliseconds.

- **resave: false**:

  Prevents the session from being saved back to the session store if it wasn’t modified during the request. This can help reduce unnecessary operations and improve performance.

- **app.use(sessinMiddleWare);**:

  This line applies the session middleware to the entire application. All incoming requests will pass through this middleware, allowing the session data to be accessed or modified as needed.



### ➡  get Session Data
**Syntax:**
```javascript
    if (req.session.cart) {
        res.send(req.session.cart);
    } else {
        req.session.cart = [];
        res.send(req.session.cart);
    }

```

- **Checking for Cart in Session**:
  
    This conditional checks whether there is a cart property in the session object. The session object (req.session) is used to store and retrieve session data for the current user.

- **Cart Exists**:

  If the cart property exists in the session, the server responds with the cart data using res.send(req.session.cart);. This sends the cart data back to the client.

- **Cart Does Not Exist**:

  If the cart property does not exist in the session, a new cart is initialized as an empty array with req.session.cart = [];. Then, the server responds with this empty cart using res.send(req.session.cart);


### ➡  add New Session Data
**Syntax:**
```javascript
const item = {
       id: 1,
       productName: 'pen',
       price: 5,
};
 req.session.cart.push(item);
```

- **Creating Cart Item**:
  
    This line creates a new object called item that contains the product ID, product name, and price. This object represents the product to be added to the cart.

- **Adding Product to Cart**:

    This line adds the item object to the cart array stored in the session.



### ➡  Remove Session Data
**Syntax:**
```javascript
  if (req.session.cart)
  {
      req.session.cart = req.session.cart.filter((product) => product.id !== id);
      res.send("<h1>your product removed from cart</h1>");
  }
  else
  {
    res.send("<h1>cart does not contain this product</h1>");
  }
```

- **Checking for Cart in Session**:
  
   This conditional checks whether there is a cart property in the session object. The session object (req.session) is used to store and retrieve session data for the current user.

- **Removing Product from Cart**:

    This line filters the cart array stored in the session. It removes the product with the matching ID by keeping only the products whose ID does not match the provided ID.




### ➡  Destroy Session
**Syntax:**
```javascript
 req.session.destroy((err)=>
 {
    if(err)
    {
        res.send("<h1>Failed to destroy session</h1>");
    }
    else
    {
        res.send("<h1> destroy session. cart successfully checkout</h1>");
    }
  });
```

- **Destroying the Session**:
  
    This line calls the destroy method on the session object (req.session). The destroy method terminates the session and clears all session data. It takes a callback function that gets executed once the session is destroyed (or if an error occurs).

- **Handling Errors**:

    Inside the callback function, this conditional checks if there was an error during the session destruction. If an error occurred, it sends an HTML response indicating the failure.

- **Session Destroyed Successfully**:

   If no error occurred, the session was successfully destroyed. The code inside the else block sends an HTML response confirming the successful checkout and session destruction.



<!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------
## * ejs Module:-

The EJS (Embedded JavaScript) module is a popular templating engine for Node.js that allows you to generate HTML markup with plain JavaScript. It helps in creating dynamic web pages by embedding JavaScript code within your HTML templates.

**Installation:**
```javascript
npm install ejs
```

### ➡  Rendering the EJS Template:

renderFile() is a method provided by the EJS templating engine to render EJS templates from a file. This method is particularly useful when you want to render a template file and send the rendered HTML as a response in a Node.js application. 

**Syntax:**
```javascript
 ejs.renderFile("pathOfEjsFile",{},{},(err,template)=>{};
```

### ➡  Set the EJS View Engine:

In an Express.js application, the app.set('view engine', 'ejs') configuration is used to set the default templating engine for the application. This makes it easier to render views without having to specify the engine every time.

**Syntax:**
```javascript
app.set('view engine', 'ejs');
```

### ➡ render():

he render() method in Express.js is used to render a view template and send the resulting HTML as the response to the client. This method is particularly useful for generating dynamic web pages by combining server-side data with HTML templates.

**Syntax:**
```javascript
res.render(view [, data]);

```
### ➡ EJS Tags:

EJS (Embedded JavaScript) tags are used within EJS templates to embed JavaScript code, which allows you to create dynamic HTML content. 

**Example:**
```javascript
<p>Welcome, <%= username %>!</p>
```

If username is Sanika, this renders as:
**Example:**
```javascript
<p>Welcome, Sanika!</p>
```

By using these tag appropriately, you can create dynamic and secure templates for your web applications.



<!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------
## * JWT Module:-

JSON Web Tokens (JWT) are a compact, URL-safe means of representing claims to be transferred between two parties. The jsonwebtoken library in Node.js is used to sign, verify, and decode JWTs. 

**Installation:**
```javascript
npm install jsonwebtoken

```

### ➡ sign():

The jwt.sign() method is used to create a new JSON Web Token. It takes a payload and signs it with a secret key, optionally including additional options such as expiration time.

**Syntax:**
```javascript
jwt.sign(dataTOIncludeInToken, secretOrPrivateKey);

```

**Example:**
```javascript
 var data={
    time:Date(),
    client: userData.email
}
// genrate token
var token=jwt.sign(data,jwtSecreteKey);
// display token 
res.send(token);

```

### ➡ verify():

The jwt.verify() method is used to verify the validity of a JSON Web Token (JWT). It checks if the token is correctly signed and optionally verifies the token's claims, such as expiration time.

**Syntax:**
```javascript
jwt.verify(token, secretOrPublicKey)
```

**Example:**
```javascript
//verify token
 var extractToken=jwt.verify(token,jwtSecreteKey);
// display token client 
res.send(extractToken.client);
```

### ➡ decode():

The jwt.decode() method is used to decode a JSON Web Token (JWT) without verifying its signature. This method allows you to extract and view the token's payload, but it does not ensure that the token is valid or has not been tampered with.

**Syntax:**
```javascript
jwt.decode(token)
```

**Example:**
```javascript
const decoded = jwt.decode(token);
res.send(decoded);
```




<!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------
## * AJAX :-

AJAX stands for Asynchronous JavaScript and XML. It's a technique for creating fast and dynamic web pages by allowing web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes. This means that parts of a web page can be updated without reloading the entire page.

**Syntax:**
```javascript
    $.ajax({
        dataType: "json",
        url: url,
        type: "GET",
        success: (data) =>
          {
              console.log(data);
          },
         });
```

- ### ➡ $.ajax():

  This is a jQuery function used to perform an asynchronous HTTP (Ajax) request.

- ### ➡ dataType: "json":

  Specifies the type of data expected from the server. In this case, it's JSON.

- ### ➡ url:"http://localhost:5050/api/product" :

  Specifies the URL to which the request is sent. 

- ### ➡ type: "GET":

  Specifies the type of request to be made, in this case, a GET request.

- ### ➡ success:

  This is a callback function that is executed if the request succeeds.

- ### ➡ data:

  This parameter will contain the data returned from the server.

- ### ➡ console.log(data):

  Logs the returned data to the console.





<!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------
## * fetch Request :-

The fetch API is a modern way to make HTTP requests in JavaScript. It's a promise-based API that provides a more powerful and flexible feature set compared to the older XMLHttpRequest API. 

**Syntax:**
```javascript
     fetch("http://localhost:5050/api/product/" + idOfProduct, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      if (response.ok) {
        apiError = false;
        result = await response.json();
      } else {
        apiError = true;
      }
    })
    .catch(() => (apiError = true));
};

```

- ### ➡ $.fetch():

  This function initiates a fetch request to the specified URL. The URL here is constructed dynamically using the idOfProduct variable.

- ### ➡ headers:

   The headers option is used to specify additional information about the request. In this case, the Content-Type header is set to application/json, indicating that the client expects a JSON response from the server.

- ### ➡ .then:

   This method is called once the fetch request is completed. It takes a callback function that handles the response.

- ### ➡ sync (response) => { ... }:

   An asynchronous arrow function that processes the response.

- ### ➡ response.ok:

   A boolean property that indicates if the response status is in the range 200-299, which means the request was successful.

- ### ➡ await response.json():

   This statement parses the response body as JSON. Since response.json() returns a promise, await is used to wait for the promise to resolve.

- ### ➡ else { apiError = true; }:

   Sets apiError to true if the response was not successful.

- ### ➡ .catch(() => (apiError = true)):

   Catches any errors that occur during the fetch request and sets apiError to true.





<!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------
## * fetch Request :-

The cors module is a Node.js package for providing a Connect/Express middleware that can be used to enable Cross-Origin Resource Sharing (CORS) with various options. CORS is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the resource originated.

**Installation:**
```javascript
npm install cors
 ```

**Syntax:**
```javascript
const cors = require('cors');
 ```



<!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------
## * Promises :-

Promises in JavaScript are used to handle asynchronous operations. They represent a value that may be available now, or in the future, or never. Promises provide a way to chain asynchronous operations and handle their success or failure in a clean and manageable way.

**Installation:**
```javascript
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  let success = true; // Simulating success or failure
  if (success) {
    resolve("Operation was successful");
  } else {
    reject("Operation failed");
  }
});

 ```

### reject:
The reject function in a JavaScript promise is used to signal that the promise has failed or encountered an error.

### resolve:
the resolve function is used to mark a promise as successfully completed. 

<!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------
## * Import Statement :-

In Node.js, the import statement is used to bring in modules, functions, or objects from other files or packages.
Note:-
- Adding "type": "module" to your package.json file.

**Installation:**
```javascript
// Importing a built-in module (e.g., 'fs' for file system operations)
import fs from 'fs';
 ```
<!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------
## * Object Oriented programming :-

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which are instances of classes. OOP is widely used in software development because it helps in organizing complex programs, making code reusable, and modeling real-world scenarios.


### Key Concepts of OOP:
- ➡ **Classes and Objects**
- ➡ **Encapsulation**
- ➡ **Inheritance**
- ➡ **Polymorphism**
- ➡ **Abstraction**

  <!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------
## * Classes and Objects :-

Node.js, being a JavaScript runtime, supports the creation and use of classes and objects as defined in the ECMAScript 2015 (ES6) standard. Classes in JavaScript provide a way to define reusable blueprints for creating objects with shared behavior and state.

**Installation:**
```javascript
class Person {
  // Constructor to initialize properties
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display person's details
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Creating an instance of the Person class
const person1 = new Person('Sanika', 19);
person1.displayInfo(); // Output: Name: Sanika, Age: 19

 ```

  <!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------
## * Encapsulation :-

Encapsulation is a fundamental concept in object-oriented programming that helps protect the internal state of an object and restricts access to its data and methods. In JavaScript, encapsulation can be achieved using classes, constructor functions, and closures.

  <!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------
## * Inheritance :-

Inheritance is a fundamental concept in object-oriented programming that allows one class to inherit properties and methods from another class. In JavaScript, inheritance can be achieved using classes and the extends keyword.


  <!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------
## * Polymorphism :-

Polymorphism is a core concept in object-oriented programming (OOP) that allows objects of different classes to be treated as objects of a common superclass. It provides a way to perform a single action in different forms, enabling methods to operate on objects of different types.


  <!------------------------------------------------------------->
----------------------------------------------------------------------------------------------------------------------------------------------
## * Abstraction :-

Abstraction is a fundamental principle in object-oriented programming (OOP) that allows you to hide the implementation details of a class and expose only the necessary parts to the user. It helps in reducing complexity and increasing efficiency by allowing the programmer to focus on interactions at a higher level without worrying about the internal details.




----------------------------------------------------------------------------------------------------------------------------------------------
