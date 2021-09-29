import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateServiceProviderSkillDto {
    @IsString()
    @ApiProperty()
    additionalInfo: string;

    @IsDate()
    @ApiProperty({ example: '2016-06-22 19:10:25-07' })
    startDate: Date;

    @IsString()
    @IsUUID()
    @IsNotEmpty({ message: 'This field cannot be empty.' })
    @ApiProperty()
    idSkill: string;

    @IsString()
    @IsUUID()
    @IsNotEmpty({ message: 'This field cannot be empty.' })
    @ApiProperty()
    idServiceProvider: string;
}
