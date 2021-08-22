import { PersonBlocked } from '../../person-blocked/entities/person-blocked.entity';

export interface IRejectedServiceProviderDto {
  idApprover?: string;
  approved: boolean;
  cnpj: string;
  joinDate?: Date;
  descriptionNotApproved?: string;
  idServiceProvider: {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    cpf: string;
    rg: string;
    id_html?: string;
    sex: string;
    isAdmin: boolean;
  };
  isBlocked: boolean;
  blocked?: Partial<PersonBlocked>;
}
