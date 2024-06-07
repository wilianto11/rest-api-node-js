import express from "express";
import * as ServiceProduct from "./services/product.js";
import * as ServiceUser from "./services/user.js";

const host = "localhost";
const port = 8080;
const app = express();
app.use(express.json());

//users
app.get("/users", ServiceUser.tokenValidation, ServiceUser.getUsers);
app.post("/users", ServiceUser.createUsers);
app.put("/users/:id", ServiceUser.tokenValidation, ServiceUser.updateUsers);
app.delete("/users/:id", ServiceUser.tokenValidation, ServiceUser.deleteUsers);
app.post("/login", ServiceUser.login);

//Product
app.get("/product", ServiceUser.tokenValidation, ServiceProduct.getProduct);
app.post("/product", ServiceUser.tokenValidation, ServiceProduct.createProduct);
app.put(
  "/product/:id",
  ServiceUser.tokenValidation,
  ServiceProduct.updateProduct
);
app.delete(
  "/product/:id",
  ServiceUser.tokenValidation,
  ServiceProduct.deleteProduct
);

app.listen(port, host, () => {
  console.log(`server berjalan di http://${host}:${port}`);
});
