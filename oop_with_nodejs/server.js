// modules
import express from "express";
import router from "./router.js";
const app = express();

// middleware configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router(app);
app.listen(5050, () => {
  console.log("server is listen at port:5050");
});
