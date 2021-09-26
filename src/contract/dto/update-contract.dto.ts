import { PartialType } from '@nestjs/swagger';
import { IsBoolean,IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { CreateContractDto } from './create-contract.dto';

export class UpdateContractDto {
    @IsBoolean()
    @IsNotEmpty({ message: 'This field cannot be empty.' })
    @ApiProperty()
    approved: boolean;

    @IsString()
    @IsNotEmpty({ message: 'This field cannot be empty.' })
    @ApiProperty()
    link: string;

    @IsString()
    @IsNotEmpty({ message: 'This field cannot be empty.' })
    @ApiProperty()
    status:string
}
