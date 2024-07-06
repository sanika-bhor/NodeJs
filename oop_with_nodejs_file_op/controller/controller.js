// import class
import products from "../model/model.js";

// define class as productController
export default class productController 
{
  // parameterises constructor
  constructor(mgr) {
    //Initial data repository insertion
    this.repoManger = mgr;
    // create object of product class
    let product1 = new products(1, "nailPaint", 20);
    let product2 = new products(2, "EarRings", 50);
    let product3 = new products(3, "NackLane", 350);
    let product4 = new products(4, "Braclate", 80);

    // where object of this class is created then it will insert these 4 product
    this.repoManger.insert(product1);
    this.repoManger.insert(product2);
    this.repoManger.insert(product3);
    this.repoManger.insert(product4);
  }

  //  method to get all data by calling getAll method
  get = async (req, res) => 
  {
    let product = await this.repoManger.getAll();
    res.send(product);
  };

  //  method to get  data of particular id by calling getdata method
  getById = async (req, res) => 
  {
    let id = req.params.id;
    console.log(id);
    let product = await this.repoManger.getdata(id);
    res.send(product);
  };

  //  method to insert new  data  by calling insert method
  post = async (req, res) => 
  {
    let product = req.body;
    console.log(product);
    this.repoManger.insert(product);
    res.send("data inserted");
  };

  //  method to update new  data of particular id by calling update method
  put = async (req, res) => 
  {
    let product = req.body;
    let id = product.id;
    console.log(product);
    this.repoManger.update(id, product);
    res.send("data updated");
  };

  //  method to delete  data of particular id by calling delete method
  delete = async (req, res) => 
  {
    let id = req.params.id;
    this.repoManger.delete(id);
    res.send("data deleted");
  };
}
