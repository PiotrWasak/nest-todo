import { Status } from '../types/status.type';
import { ApiResponseModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class ResponseTaskDto {
  @ApiResponseModelProperty()
  readonly _id: string;
  @ApiResponseModelProperty()
  readonly content: string;
  @ApiResponseModelProperty()
  readonly status: Status;
  @ApiResponseModelProperty()
  readonly createdAt: Date;
  @ApiResponseModelProperty()
  readonly updatedAt: Date;
}
