import { EncrypterCompare } from './protocols/encrypter-compare.protocol';
import { Encrypter } from './protocols/encrypter.protocol';
import { hashSync } from 'bcrypt';

export class AdpterBcrypt implements Encrypter, EncrypterCompare {
  encrypt(password: string) {
    console.log('aquiaqui', password);
    return hashSync(password, 8);
  }

  compare() {
    return false;
  }
}
