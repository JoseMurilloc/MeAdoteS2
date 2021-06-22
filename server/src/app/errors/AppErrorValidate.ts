class AppErrorValidate {
  public readonly errors : string[];
  public readonly statusCode : number;

  constructor(message: string[], statusCode = 400) {
    this.errors = message;
    this.statusCode = statusCode;
  }
}

export default AppErrorValidate;
