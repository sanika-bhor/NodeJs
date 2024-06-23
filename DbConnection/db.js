const mysql=require('mysql2');
var conUrl={
    host:'localhost',
    user:'root',
    password:'root123',
    database: 'college'
}
const connection=mysql.createConnection(conUrl);
connection.connect((err)=>{
    if(!err)
        {
            console.log("connection establish successfully");
        }
        else{
            var str=JSON.stringify(err);
            console.log(str);
            console.log("connection not establish");
        }
});



var selectData = function () {
  let commad="select * from student";
  connection.query(commad,(err,rows,fields)=>{
      var strRow=JSON.stringify(rows);
      console.log(strRow);
  })
};
selectData();
var insertData = function () {
  let commad = "insert into student values(4,'payal',17);";
  connection.query(commad, (err, rows, fields) => {
    var strRow = JSON.stringify(rows);
    console.log(strRow);
  });
};