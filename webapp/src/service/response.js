/**
 * @module ResponseService
 */

exports.errResponse = function (errorCode, errorMsg) {
  var message;

  switch (errorCode) {
    case 10: message = 'Required parameter is not defined.';
      break;
    case 20: message = 'Parameter is invalid.';
      break;
    default: message = 'Undefined error code';
      break;
  }

  return {
    code: errorCode,
    message: errorMsg || message
  }
};