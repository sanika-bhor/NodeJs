# <p align="center">NodeJs Notes</p>

## * Node.js Modules:-
Modules in Node.js are reusable pieces of code that can be imported and used in other files. This helps in keeping your code organized and easier to manage.

### Types of Modules:
- **Built-in Modules**: Node.js comes with several built-in modules, like fs (file system), http, path, etc.
- **User-defined Modules**: These are custom modules created by the user with the help of exporting function.
- **Third-party Modules**: Modules created by the community and available via npm (Node Package Manager).

### Syntax:
```bash
var express = require("express");
```


## * Exporting Function:-
Exporting in Node.js means making functions or variables available for use in other files. This is done using the 'module.exports' or 'exports' object.

### Syntax:
```bash
exports.sayHello = function() {
    console.log("Hello from the handler module!");
};
```
