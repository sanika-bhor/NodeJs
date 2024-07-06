// product class
export default class products 
{
  // parameterised constructor
  constructor(id, productName,price) 
  {
    this.id = id;
   this.productName=productName;
   this.price=price;
  }
  
  display() 
  {
    console.log("id: " + this.id);
    console.log("title: " + this.title);
    console.log("discription: " + this.discription);
    console.log("price: " + this.price);
    console.log("quantity: " + this.quantity);
  }
}