import productController from "./controller.js";
import packageManager from "./repository.js";
import products from "./model.js";

var mgr = new packageManager();
var controller = new productController(mgr);


export default function (app) {
    app.get("/api/products",(req,res)=>{
        let data = controller.get();
        console.log(data);
        res.send(data);
    });

     app.get("/api/products/:id", (req, res) => {
       let data = controller.getById(2);
       console.log(data);
       res.send(data);
     });

    app.post("/api/insert",(req,res)=>{
        var flower1 = new products(1, "rose", "valentine flower", 15, 50);
        var flower2 = new products(2, "lotus", "beautiful flower", 45, 23);

        controller.post(flower1);
        controller.post(flower2);
        res.send("data inserted");
    });

    app.put("/api/update", (req, res) => {
      var flower2 = new products(2, "lily", "beautiful flower", 45, 23);

      controller.put(2,flower2);
      res.send("data updated");
    });

    
    app.delete("/api/delete", (req, res) => {

      controller.delete(2);
      res.send("data delete")
    });
  //   app.post("/api/register", registrationController.register);
};
