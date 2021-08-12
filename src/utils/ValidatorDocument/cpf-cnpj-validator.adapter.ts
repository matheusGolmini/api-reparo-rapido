import { ValidatorCPF } from './protocols/validator-cpf.protocol';
import { ValidatorCNPJ } from './protocols/validator-cnpj.protocol';
import { cpf, cnpj } from 'cpf-cnpj-validator';

export class AdpterValidatorDocument implements ValidatorCPF, ValidatorCNPJ {
  isValidCnpj(value: string) {
    return cnpj.isValid(value);
  }

  isValidCpf(value: string) {
    return cpf.isValid(value);
  }
}
