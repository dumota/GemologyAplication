export interface IEncrypt {
  encripty(password: string): Promise<string>;
  comparePassword(passwordDB: string, passwordBody: string): Promise<Boolean>;
}
