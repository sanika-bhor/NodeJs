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
- **JSON.parse()**:

JSON.parse() is a method in NodeJs that converts a JSON string into a JavaScript object. This is useful when you receive data as a JSON string and need to work with it as a JavaScript object.

**Snytax**:
```javascript
JSON.parse(data.toString());
```

- **JSON.stringify()**:

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
- **Reading Files**:
  
The 'readFile()' method reads a file asynchronously.<br>The 'readFileSync()' method reads a file synchronously.

**Snytax**:
```javascript
fs.readFile('fileName, (err, data) => {
  if (err) throw err;
  console.log(data);
});

```

- **Writing Files**:
  
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

### express object:
The line var app = express(); initializes a new Express application. This app object is the main component of an Express application and allows you to define routes, middleware, and configuration settings.

**syntax**:
```javascript
var app = express();
```

