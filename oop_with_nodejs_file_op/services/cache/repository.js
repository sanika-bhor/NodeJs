export default class packageManager 
{
  constructor() 
  {
    this.products = [];
  }

  // get all products
  getAll() 
  {
    return this.products;
  }

  // get product detail by its Id
  getdata(id) 
  {
    let foundProduct = this.products.find((p) => p.id == id);
    return foundProduct;
  }
  
  //insert new product
  insert(product) 
  {
    this.products.push(product);
  }

  // update products detail by its id
  update(id, product) 
  {
    this.products = this.products.filter((p) => p.id != id);
    this.products.push(product);
  }

  // delete product
  delete(id)
  {
    this.products = this.products.filter((p) => p.id != id);
  }
}