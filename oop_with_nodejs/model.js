export default class products {
  constructor(id, title, discription, price, quantity) {
    this.id = id;
    this.title = title;
    this.discription = discription;
    this.price = price;
    this.quantity = quantity;
  }
  display() {
    console.log("id: " + this.id);
    console.log("title: " + this.title);
    console.log("discription: " + this.discription);
    console.log("price: " + this.price);
    console.log("quantity: " + this.quantity);
  }
}