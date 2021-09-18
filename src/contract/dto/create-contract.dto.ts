import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateContractDto {
@IsUUID()
@IsNotEmpty({ message: 'This field cannot be empty.' })
@ApiProperty()
idPerson: string;

@IsUUID()
@IsNotEmpty({ message: 'This field cannot be empty.' })
@ApiProperty()
idProvider: string;

@IsBoolean()
@IsNotEmpty({ message: 'This field cannot be empty.' })
@ApiProperty()
approved: boolean;

@IsString()
@IsNotEmpty({ message: 'This field cannot be empty.' })
@ApiProperty()
longDescription: string;

@IsString()
@IsNotEmpty({ message: 'This field cannot be empty.' })
@ApiProperty()
briefDescription: string;

@IsString()
@IsNotEmpty({ message: 'This field cannot be empty.' })
@ApiProperty()
startDate: string;

@IsString()
@IsNotEmpty({ message: 'This field cannot be empty.' })
@ApiProperty()
endDate: string;

@IsString()
@IsNotEmpty({ message: 'This field cannot be empty.' })
@ApiProperty()
amountServiceProvider: string;

@IsString()
@IsNotEmpty({ message: 'This field cannot be empty.' })
@ApiProperty()
amountTotal: string;


@IsString()
@IsNotEmpty({ message: 'This field cannot be empty.' })
@ApiProperty()
amountApp: string;

@IsString()
@IsNotEmpty({ message: 'This field cannot be empty.' })
@ApiProperty()
agreement: string;

@IsString()
@IsNotEmpty({ message: 'This field cannot be empty.' })
@ApiProperty()
link: string;

}

