export class AppError {
  public readonly messge: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.messge = message;
    this.statusCode = statusCode;
  }
}
