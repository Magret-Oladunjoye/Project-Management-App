import { Expose } from 'class-transformer';

export class ShiftDto {
    @Expose()
    _id: string;

    @Expose()
    user_id: string;

    @Expose()
    shift_title: string;

    @Expose()
    shift_description: string;

    @Expose()
    shift_start_date: Date;

    @Expose()
    shift_end_date: Date;


}