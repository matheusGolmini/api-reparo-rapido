import { EncrypterCompare } from './protocols/encrypter-compare.protocol';
import { Encrypter } from './protocols/encrypter.protocol';
import { hashSync, compareSync } from 'bcrypt';

export class AdpterBcrypt implements Encrypter, EncrypterCompare {
  encrypt(password: string) {
    return hashSync(password, 8);
  }

  compare(password: string, hashPassword: string) {
    return compareSync(password, hashPassword);
  }
}
