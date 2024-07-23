# <p align="center">NodeJs Notes</p>
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








