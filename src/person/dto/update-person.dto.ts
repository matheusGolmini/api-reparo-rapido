import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty } from 'class-validator';
import { CreatePersonDto } from './create-person.dto';

export class UpdatePersonDto extends PartialType(CreatePersonDto) {

    @IsBoolean()
    @IsNotEmpty({ message: 'This field cannot be empty.' })
    @ApiProperty({ default: false })
    isBlocked: boolean;

}