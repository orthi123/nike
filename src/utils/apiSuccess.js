class ApiSuccess{

constructor(statusCode,message='Success',data={},meta={}){
    this.success=statusCode<400;
    this.statusCode=statusCode;
    this.message=message;
    this.data=data;
    this.meta=meta;
}

//200 ok------------

static ok(data={},message='OK',meta={}){

    return new ApiSuccess(200,message,data,meta);
}

//201 created------------
static created(data={},message='RESOURCE CREATED',meta={}){

    return new ApiSuccess(201,message,data,meta);
}

//204 No Content(rare,data will be empty)--------------

static noContent(message='OK',meta={}){

    return new ApiSuccess(204,message,meta);
}

//Custom success------------
static custom(statusCode,message,data={},meta={}){

    return new ApiSuccess(statusCode,message,data,meta);
}
}
export default ApiSuccess;