import { Expose } from "class-transformer";
import { IsString } from "class-validator";

export class GetShiftDto {
    @IsString()
    user_id: string;

    


}