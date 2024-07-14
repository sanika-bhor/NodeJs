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

----------------------------------------------------------------------------------------------------------------------------------------------
## * Exporting Function:-
Exporting in Node.js means making functions or variables available for use in other files. This is done using the 'module.exports' or 'exports' object.

### Syntax:
```javascript
exports.sayHello = function() {
    console.log("Hello from the handler module!");
};
```
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

----------------------------------------------------------------------------------------------------------------------------------------------

## * fs Module:-
The fs module in Node.js provides an API for interacting with the file system. It allows you to perform operations such as reading, writing, updating, and deleting files and directories.

**Snytax**:
```javascript
const fs = require('fs');
```

### File Operation:
- **Reading Files**:
  
The readFile method reads a file asynchronously.
The readFileSync method reads a file synchronously.

**Snytax**:
```javascript
fs.readFile('fileName, (err, data) => {
  if (err) throw err;
  console.log(data);
});

```





