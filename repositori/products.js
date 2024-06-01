import dbPool from "../utils/dbconn.js";

//query Tampilkan product
function getDataProduct() {
  const query =
    "SELECT product_id, product_name, price, description, stock, created_at, updated_at from products";
  return dbPool.query(query);
}
//Query Membuat Product
function createDataProduct(name, price, description, stock) {
  let createAt = new Date();
  let updateAt = new Date();
  const query =
    "INSERT INTO products (product_name, price, description, stock, created_at, updated_at) VALUES(?,?,?,?,?,?)";
  const values = [name, price, description, stock, createAt, updateAt];

  return dbPool.query(query, values);
}
//Query Mengubah Product
function updateDataProduct(id, name, price, description, stock) {
  let updateAt = new Date();
  const query =
    "UPDATE products SET product_name = ?, price = ?, description = ?, stock = ?, updated_at =? WHERE product_id =?";
  const value = [name, price, description, stock, updateAt, id];

  return dbPool.query(query, value);
}
//Query Menghapus Product
function deleteDataProduct(id) {
  const query = "DELETE FROM products WHERE product_id = ?";
  const value = [id];

  return dbPool.query(query, value);
}

export {
  createDataProduct,
  deleteDataProduct,
  getDataProduct,
  updateDataProduct,
};
