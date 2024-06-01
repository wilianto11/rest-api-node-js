import {
  createDataProduct,
  deleteDataProduct,
  getDataProduct,
  updateDataProduct,
} from "../repositori/products.js";
import { responseError, responseSuccess } from "../utils/response.js";

//ambil data users
async function getProduct(req, res, next) {
  try {
    const [result] = await getDataProduct();
    if (result.length != 0) {
      responseSuccess(res, "success", result);
    } else {
      responseError(res, "error", 404);
    }
  } catch (error) {
    next(error);
  }
}

//buat data users
async function createProduct(req, res, next) {
  try {
    let name = req.body.name;
    let price = req.body.price;
    let description = req.body.description;
    let stock = req.body.stock;
    const [result] = await createDataProduct(name, price, description, stock);
    if (result.insertId > 0) {
      responseSuccess(res, "success", result.insertId);
    } else {
      responseError(res, "Gagal untuk membuat data product", 500);
    }
  } catch (error) {
    next(error);
  }
}

async function updateProduct(req, res, next) {
  try {
    let id = req.params.id;
    let name = req.body.name;
    let price = req.body.price;
    let description = req.body.description;
    let stock = req.body.stock;
    let updateAt = req.claims.updateAt;
    console.log(req.claims);
    const [result] = await updateDataProduct(
      id,
      name,
      price,
      description,
      stock,
      updateAt
    );
    if (result.affectedRows > 0) {
      responseSuccess(res, "data product succes terupdate", result);
    } else {
      responseError(res, "data product gagal terupdate", 400);
    }
  } catch (error) {
    next(error);
  }
}

async function deleteProduct(req, res, next) {
  try {
    let id = req.params.id;
    const [result] = await deleteDataProduct(id);

    if (result.affectedRows > 0) {
      responseSuccess(res, "data product berhasil dihapus", result);
    } else {
      responseError(res, "data product gagal dihapus", result);
    }
  } catch (error) {
    next(error);
  }
}

export { createProduct, deleteProduct, getProduct, updateProduct };
