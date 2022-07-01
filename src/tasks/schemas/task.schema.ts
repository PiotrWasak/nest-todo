import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Status } from '../types/status.type';

export type TaskDocument = Task & Document;

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Task {
  @Prop()
  content: string;

  @Prop()
  status: Status;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
