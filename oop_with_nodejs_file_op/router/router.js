// import modules
import productController from "../controller/controller.js";
// import packageManager from "../services/cache/repository.js";
import products from "../model/model.js";
import packageManager from "../services/fileIO/iomgr.js";

// create objects of class
var mgr = new packageManager();
var controller = new productController(mgr);

// http router mapping
export default function (app) 
{
      app.get("/api/products",controller.get);
      app.get("/api/products/:id", controller.getById)
      app.post("/api/insert",controller.post)
      app.put("/api/update", controller.put); 
     app.delete("/api/delete/:id", controller.delete)

};
