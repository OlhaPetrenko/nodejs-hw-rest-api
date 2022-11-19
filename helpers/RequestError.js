const messageText = {
  400: "Bad request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
};

function RequestError(status, message = messageText[status]) {
  const error = new Error(message);

  error.status = status;
  return error;
}
module.exports = RequestError;
