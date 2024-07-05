export default class packageManager {
  constructor() {
    this.products = [];
  }
  getAll() {
    return this.products;
  }
  getdata(id) {
    let foundProduct = this.products.find((p) => p.id == id);
    return foundProduct;
  }
  insert(product) {
    this.products.push(product);
  }
  update(id, product) {
    this.products = this.products.filter((p) => p.id != id);
    this.products.push(product);
  }
  delete(id) {
    this.products = this.products.filter((p) => p.id != id);
  }
}