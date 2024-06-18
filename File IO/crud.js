var member = [
  { id: 1, name: "sanika", age: 19, email: "bhorsanika0239@gmail.com" },
  { id: 2, name: "sumit", age: 17, email: "bhorsumit227@gmail.com" },
  { id: 3, name: "rishika", age: 10, email: "baby0239@gmail.com" },
  { id: 4, name: "disha", age: 18, email: "disha@gmail.com" },
  { id: 5, name: "shreya", age: 5, email: "shreyabhor9@gmail.com" },
];

var getAll=function()
{
    return member;
}

console.log("****All data*****");
var allData=getAll();
console.log(allData);


console.log("****data by id*****");
var getById=function(tobeFind)
{
    var dataById={};
    dataById=member.find((person)=>(person.id===tobeFind));
    console.log(dataById);
}
getById(1);


console.log("****data by name*****");
var getByName = function (name) {
  var dataByName = {};
  dataByName= member.find((person) => (person.name == name));
    console.log(dataByName);

};
getByName("rishika");

console.log("****after remove data by id*****");
var removeById=function(id)
{
    var DataRemove=[];
    dataRemove=member.filter((person)=>(person.id!==id));
    console.log(dataRemove);
}
removeById(5);

console.log("****add new data*****");
var addNewData=function(person)
{
    member.push(person);
    console.log(member);
}

var person={
    "id":6,
    "name":"sakshi",
    "age":19,
    "email":"sakshi@gmail.com"
};
addNewData(person);