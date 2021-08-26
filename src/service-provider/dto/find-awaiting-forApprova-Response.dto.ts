import { ServiceProvider } from '../entities/service-provider.entity';

export class AwaitingForApprovalResponseDto extends ServiceProvider {
  status?: number;
}
