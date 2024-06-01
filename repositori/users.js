import dbPool from "../utils/dbconn.js";

// Query menampilkan Data Users
function getData() {
  const query =
    "select user_id, username, password, created_at, updated_at from users";
  return dbPool.query(query);
}

// Query Membuat data users
function createData(username, password) {
  let createAt = new Date();
  let updateAt = new Date();
  const query =
    "INSERT INTO users (username,password,created_at, updated_at) VALUES(?,?,?,?)";
  const values = [username, password, createAt, updateAt];

  return dbPool.query(query, values);
}

//Query Mengupdate Data Users
function updateData(id, username) {
  let updateAt = new Date();
  const query = "UPDATE users SET username =?, updated_at =? WHERE user_id =?";
  const value = [username, updateAt, id];

  return dbPool.query(query, value);
}

//Query Membuat delete data users
function deleteData(id) {
  const query = "DELETE FROM users WHERE user_id = ?";
  const value = [id];

  return dbPool.query(query, value);
}

//Query menampilkan data berdasarkan username
function getDataByUsername(username) {
  const query =
    "SELECT user_id, username, password, created_at, updated_at FROM users WHERE username = ?";
  const value = [username];
  return dbPool.query(query, value);
}

export { createData, deleteData, getData, getDataByUsername, updateData };
