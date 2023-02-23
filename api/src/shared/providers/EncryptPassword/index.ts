import { compare, hash } from "bcrypt";
import { IEncrypt } from "../IEncripty";

export class Encrypt implements IEncrypt {
  async encripty(password: string): Promise<string> {
    const hashPass = await hash(password, 8);
    return hashPass;
  }
  async comparePassword(
    passwordDB: string,
    passwordBody: string
  ): Promise<Boolean> {
    const passwordMatch = await compare(passwordBody, passwordDB);
    if (passwordBody) {
      return true;
    }
    return false;
  }
}
