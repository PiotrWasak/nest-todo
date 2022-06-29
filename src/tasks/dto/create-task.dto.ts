import { ApiProperty } from '@nestjs/swagger';
import { Status } from '../types/status.type';
import { IsIn, IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly content: string;
  @ApiProperty()
  @IsIn(['done', 'todo'])
  readonly status: Status;
}
