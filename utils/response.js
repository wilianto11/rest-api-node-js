const responseSuccess = (response, message, data, status = 200) => {
  return response.status(200).json({
    status: 200,
    message: message,
    data: data,
  });
};

const responseError = (response, message, status = 400) => {
  return response.status(status).json({
    status: status,
    message: message,
  });
};

export { responseError, responseSuccess };
