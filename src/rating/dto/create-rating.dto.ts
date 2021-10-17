import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class CreateRatingDto {

    @IsString()
    @IsUUID()
    @IsNotEmpty({ message: 'This field cannot be empty.' })
    @ApiProperty()
    idRatingPerson: string;

    @IsString()
    @IsUUID()
    @IsNotEmpty({ message: 'This field cannot be empty.' })
    @ApiProperty()
    idRatedPerson: string;

    @IsString()
    @IsUUID()
    @IsNotEmpty({ message: 'This field cannot be empty.' })
    @ApiProperty()
    idContract: string;

    @IsNumber()
    @IsNotEmpty({ message: 'This field cannot be empty.' })
    @ApiProperty()
    rating: number;
}
