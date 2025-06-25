class ApiError extends Error {
  //  @param {number} statuscode -the HTTP status code for the error
  //  @param {string} message  -the error message
  //  @param {object} erros -additional error details (optional)

  constructor(
    statusCode,
    message = 'Something went wrong',
    errors = {},
    stack = '',
    errorCode = ''
  ) {
    super(message); //override kore

    (this.name=this.constructor.name),
    this.success = false;
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    this.errorCode = errorCode;
    //terminal e dekhi kun line a error hoyeche

    //   if(process.env.NODE_ENV='development'){
    //     this.stack=this.stack;
    //   }else{
    //     this.stack=null;
    //   }



    //arekta way ache-------
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
    // this.stack=Error.captureStackTrace(this,this.constructor);
  }


  

  //401 Unauthorized-----------------
  static unauthorized(message = 'Unauthorizes', errors = {}, errorCode = 'AUTH_401') {
    return new ApiError(401, message, errors, '', errorCode);
  }




  //403 Forbidden-------------------
  static forbidden(message = 'Forbidden', errors = {}, errorCode = 'AUTH_403') {
    return new ApiError(403, message, errors, '', errorCode);
  }




  //400 Bad Request------------------------
  static badRequest(message = 'Bad Request', error = {}, errorCode = 'REQ_400') {
    return new ApiError(400, message, errors, '', errorCode);
  }





  //404 Not Found--------------------------
  static notFound(message = 'Not Found', errors = {}, errorCode = 'REQ_404') {
    return new ApiError(404, message, error, '', errorCode);
  }





  //409 Conflict---------------------------
  static conflict(message = 'Conflict', errors = {}, errorCode = 'REQ_409') {
    return new ApiError(409, message, errors, '', errorCode);
  }






  //500 Server Error--------------------------
  static serverError(message = 'Internal Server Error', errors = {}, errorCode = 'SERVER_500') {
    return new ApiError(500, message, error, '', errorCode);
  }





  //200 No Content---------------------------
  static noContent(message = 'No Content') {
    return new ApiError(204, message);
  }





  //Database Error----------------------------
  static databaseError(message = 'Database Error', errors = {}, errorCode = 'DB_500') {
    return new ApiError(500, message, errors, '', errorCode);
  }





  //Custom
  static custom(statusCode, message, errors = {},stack='',errorCode ='') {
    return new ApiError(statusCode, message, errors,stack, errorCode);
  }
}


export default ApiError;