import DefaultAttributes from 'src/database/config/default.attributes';
import { ServiceProvider } from 'src/service-provider/entities/service-provider.entity';
import { Skill } from 'src/skill/entities/skill.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class ServiceProviderSkill extends DefaultAttributes {
  @Column({ type: 'varchar', name: 'additional_info' })
  additionalInfo: string;

  @Column({ type: 'timestamptz', name: 'start_date' })
  startDate: Date;

  @Column({ type: 'uuid', name: 'id_skill' })
  idSkill: string;

  @Column({ type: 'uuid', name: 'id_service_provider' })
  idServiceProvider: string;

  @ManyToOne(() => Skill, (skill) => skill.id, { eager: true })
  @JoinColumn({
    name: 'id_skill',
  })
  skill: Skill;

  @ManyToOne(
    () => ServiceProvider,
    (serviceProvider) => serviceProvider.person,
    { eager: true },
  )
  @JoinColumn({
    name: 'id_service_provider',
  })
  serviceProvider: ServiceProvider;
}
