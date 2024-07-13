var filename = "data.json";
var fs = require("fs");

var getAll = function () {
  fs.readFile(filename, (err, data) => {
    var member = JSON.parse(data.toString());
    console.log(member);
  });
};
getAll();



var getByName = function (name) {
  fs.readFile(filename, (err, data) => {
    var member = JSON.parse(data.toString());
    var dataById = member.find((person) => person.name === name);
    console.log(dataById);
  });
};
getByName("sumit");

var getById = function (id) {
  fs.readFile(filename, (err, data) => {
    var member = JSON.parse(data.toString());
    var dataById = member.find((person) => person.id === id);
    console.log(dataById);
  });
};
getById(4);

var remove = function (id) {
  fs.readFile(filename, (err, data) => {
    var member = JSON.parse(data.toString());
    var dataById = member.filter((person) => person.id != id);
    var removeMember = JSON.stringify(dataById);
    fs.writeFile(filename, (removeMember),() => {
      console.log("your data remove successfully!! this is your changes");
        getAll();
    });
  });
};
//  remove(5);

var insert=function(person)
{
    fs.readFile(filename,(err,data)=>{
        var members=JSON.parse(data.toString());
        members.push(person);
        var data=JSON.stringify(members);
        fs.writeFile(filename,data,()=>{
            console.log("data inserted successfully");
            getAll();
        })
    });
}
var person={
    "id":6,
    "name":"shreya",
    "age":15,
    "email":"shreya@gmail.com"
};
// insert(person);

var update=function(personToBeUpdate){
    fs.readFile(filename,(err,data)=>{
        var member=JSON.parse(data.toString());
        member=member.filter((person)=>(person.id!=personToBeUpdate.id));
        member.push(personToBeUpdate);
        var newData=JSON.stringify(member);
        fs.writeFile(filename,newData,()=>{
            console.log("data updated successfully");
            getAll();
        })
    })

}

var personToBeUpdate = {
  id: 4,
  name: "sakshi",
  age: 15,
  email: "sakshi@gmail.com",
};

update(personToBeUpdate);