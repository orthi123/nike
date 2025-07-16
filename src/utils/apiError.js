class ApiError extends Error {
  /**
   * @param {number} statusCode - The HTTP status code for the error
   * @param {string} message - The error message
   * @param {object} errors - Additional error details (optional)
   * @param {string} stack - Optional stack trace
   * @param {string} errorCode - Optional custom error code
   */
  constructor(
    statusCode,
    message = 'Something went wrong',
    errors = {},
    stack = '',
    errorCode = ''
  ) {
    super(message);

    this.name = this.constructor.name;
    this.success = false;
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    this.errorCode = errorCode;
    
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  // 401 Unauthorized
  static unauthorized(message = 'Unauthorized', errors = {}, errorCode = 'AUTH_401') {
    return new ApiError(401, message, errors, '', errorCode);
  }

  // 403 Forbidden
  static forbidden(message = 'Forbidden', errors = {}, errorCode = 'AUTH_403') {
    return new ApiError(403, message, errors, '', errorCode);
  }

  // 400 Bad Request
  static badRequest(message = 'Bad Request', errors = {}, errorCode = 'REQ_400') {
    return new ApiError(400, message, errors, '', errorCode);
  }

  // 404 Not Found
  static notFound(message = 'Not Found', errors = {}, errorCode = 'REQ_404') {
    return new ApiError(404, message, errors, '', errorCode);
  }

  // 409 Conflict
  static conflict(message = 'Conflict', errors = {}, errorCode = 'REQ_409') {
    return new ApiError(409, message, errors, '', errorCode);
  }

  // 500 Internal Server Error
  static serverError(message = 'Internal Server Error', errors = {}, errorCode = 'SERVER_500') {
    return new ApiError(500, message, errors, '', errorCode);
  }

  // 204 No Content
  static noContent(message = 'No Content') {
    return new ApiError(204, message);
  }

  // Database Error
  static databaseError(message = 'Database Error', errors = {}, errorCode = 'DB_500') {
    return new ApiError(500, message, errors, '', errorCode);
  }

  // Custom Error
  static custom(statusCode, message, errors = {}, stack = '', errorCode = '') {
    return new ApiError(statusCode, message, errors, stack, errorCode);
  }
}

export default ApiError;
