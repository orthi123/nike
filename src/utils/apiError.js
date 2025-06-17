class ApiError extends Error {
  constructor(statuscCode, message,errors) {
    super(message); //override kore
    this.success = false;
      this.statuscCode = statuscCode;
      this.message = message??"something went wrong";
      this.errors =errors??{};
      this.stack=this.constructor.name; //terminal e dekhi kun line a error hoyeche


    //   if(process.env.NODE_ENV='development'){
    //     this.stack=this.stack;
    //   }else{
    //     this.stack=null;
    //   }

   //arekta way ache-------

    // this.stack=Error.captureStackTrace(this,this.constructor);

  }
}


export default ApiError;