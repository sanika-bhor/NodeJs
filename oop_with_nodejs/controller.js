export default class productController {
  constructor(mgr) {
    this.repoManger = mgr;
  }
  get() {
    return this.repoManger.getAll();
  }
  getById(id) {
    return this.repoManger.getdata(id);
  }
  post(product) {
    this.repoManger.insert(product);
  }
  put(id,product) {
    this.repoManger.update(id, product);
  }
  delete(id) {
    this.repoManger.delete(id);
  }
}