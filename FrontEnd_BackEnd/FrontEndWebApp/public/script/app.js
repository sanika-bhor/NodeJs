// when button of catlog click getData function in calles
var getData=()=>{
    // it's get data from another server application
    let url="http://localhost:5050/api/product";
    // ajax is used for http request mapping
    $.ajax({
      dataType: "json",
      url: url,
      type: "GET",
    //   if get request execute successfuily the its goes to success and call callback function 
      success: (data) => {
        // print data in console at clent side
        console.log(data);
        // let strData = JSON.stringify(data);
        //alert(strData);
        /* let para1=document.getElementById("para");
            para1.innerHTML=strData;
            */
        //DOM tree Manipulation Code at Client Side
        let productList = document.getElementById("mylist");
        // create dynammic table with all data of url
        const row = document.createElement("tr");
        const col1 = document.createElement("th");
        const col2 = document.createElement("th");
        const col3 = document.createElement("th");

        const id = document.createTextNode("productId");
        const name = document.createTextNode("productName");
        const price = document.createTextNode("productPrice");

        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        col1.appendChild(id);
        col2.appendChild(name);
        col3.appendChild(price);
        productList.appendChild(row);

        // access th data and display in form of table by creating elemwnt
        for (var i = 0; i < data.length; i++) 
        {
          const row = document.createElement("tr");
          const col1 = document.createElement("td");
          const col2 = document.createElement("td");
          const col3 = document.createElement("td");

          const id = document.createTextNode(data[i].id);
          const name = document.createTextNode(data[i].productName);
          const price = document.createTextNode(data[i].price);
          
          row.appendChild(col1);
          row.appendChild(col2);
          row.appendChild(col3);
          col1.appendChild(id);
          col2.appendChild(name);
          col3.appendChild(price);
          productList.appendChild(row);

        }
      },
    });
}