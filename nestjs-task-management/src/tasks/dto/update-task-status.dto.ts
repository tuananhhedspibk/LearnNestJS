import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
