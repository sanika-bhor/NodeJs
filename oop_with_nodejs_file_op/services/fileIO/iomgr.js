// modules
import fs from "fs";

// file name on which operation perform
const fileName = "products.json";

// packageManager class 
export default class packageManager 
{
  // default constructor
  constructor() 
  {
    this.products = [];
    this.loadProduct();
  }

  // function to read data from file and converte into json data which will be store on product object
  loadProduct() 
  {
    fs.readFile(fileName, (err, data) => {
      let productData = JSON.parse(data);
      this.products = productData;
    });
  }

  // get all products from file
  getAll()
  {
    console.log(this.products);
    return this.products;
  };

  // get product detail by its Id from file
  getdata(id) 
  {
    let foundProduct = this.products.find((p) => p.id == id);
    console.log(foundProduct);
    return foundProduct;
  }

  //insert new product in file
  insert(product) 
  {
    this.products.push(product);
    let strProducts = JSON.stringify(this.products);
    fs.writeFile(fileName, strProducts, () => {
      console.log("data inserted");
    });
  }

  // update products detail by its id in file
  update(id, product) 
  {
    this.products = this.products.filter((p) => p.id != id);
    this.products.push(product);
    let strProducts = JSON.stringify(this.products);
    fs.writeFile(fileName, strProducts, () => {
      console.log("data updated");
    });
  }

  // delete product from file
  delete(id) 
  {
    this.products = this.products.filter((p) => p.id != id);
    let strProducts = JSON.stringify(this.products);
    fs.writeFile(fileName, strProducts, () => {
      console.log("data deleted");
    });
  }
}
