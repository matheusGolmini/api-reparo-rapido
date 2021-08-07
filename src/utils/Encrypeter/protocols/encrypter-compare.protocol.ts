export interface EncrypterCompare {
  compare(password: string, hashPassword: string): boolean;
}
