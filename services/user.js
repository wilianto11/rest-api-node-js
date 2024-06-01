import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  createData,
  deleteData,
  getData,
  getDataByUsername,
  updateData,
} from "../repositori/users.js";
import { responseError, responseSuccess } from "../utils/response.js";

const ACCESS_TOKEN_SECRET = "kelas.com";
const REFRESH_TOKEN_SECRET = "backend";

//ambil data users
async function getUsers(req, res, next) {
  try {
    const [result] = await getData();
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
async function createUsers(req, res, next) {
  try {
    let username = req.body.username;
    let password = req.body.password;
    let saltRound = 10;
    bcrypt.hash(password, saltRound, async (error, hashedPass) => {
      const [result] = await createData(username, hashedPass);
      if (result.insertId > 0) {
        responseSuccess(res, "success", result.insertId);
      } else {
        responseError(res, "Gagal untuk membuat data", 500);
      }
    });
  } catch (error) {
    next(error);
  }
}

async function updateUsers(req, res, next) {
  try {
    let id = req.params.id;
    let username = req.body.username;
    let updateAt = req.claims.updateAt;
    console.log(req.claims);
    const [result] = await updateData(id, username, updateAt);
    if (result.affectedRows > 0) {
      responseSuccess(res, "data succes terupdate", result);
    } else {
      responseError(res, "data gagal terupdate", 400);
    }
  } catch (error) {
    next(error);
  }
}

async function deleteUsers(req, res, next) {
  try {
    let id = req.params.id;
    const [result] = await deleteData(id);

    if (result.affectedRows > 0) {
      responseSuccess(res, "data berhasil dihapus", result);
    } else {
      responseError(res, "data gagal dihapus", result);
    }
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    let user;
    let username = req.body.username;
    let password = req.body.password;
    const [result] = await getDataByUsername(username);
    if (result.length > 0) {
      user = result[0];
      bcrypt.compare(password, user.password, (error, isValid) => {
        if (error) {
          return responseError(res, "Kesalahan dalam proses hashing", 500);
        }
        if (isValid) {
          let payload = {
            id: user.user_id,
            username: user.username,
          };
          let accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {
            expiresIn: "15m",
          });
          let refreshToken = jwt.sign(payload, REFRESH_TOKEN_SECRET, {
            expiresIn: "30m",
          });
          let data = {
            access_token: accessToken,
            refresh_token: refreshToken,
          };
          responseSuccess(res, "success", data);
        } else {
          responseError(res, " password salah");
        }
      });
    } else {
      responseError(res, "username  salah");
    }
  } catch (error) {
    next(error);
  }
}

function tokenValidation(req, res, next) {
  try {
    let authToken = req.headers.authorization;
    let accessToken = authToken && authToken.split(" ")[1];

    if (!accessToken) {
      return responseError(res, "Token tidak ada atau format salah", 401);
    }

    jwt.verify(accessToken, ACCESS_TOKEN_SECRET, (error, payload) => {
      if (error) {
        responseError(res, error.message, 403);
      }
      console.log(payload);
      req.claims = payload;
      next();
    });
  } catch (error) {
    next(error);
  }
}

export {
  createUsers,
  deleteUsers,
  getDataByUsername,
  getUsers,
  login,
  tokenValidation,
  updateUsers,
};
