import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 8080,
      username: 'postgres',
      password: 'postgres',
      database: 'task-management',
      autoLoadEntities: true, // Typeorm will translate entity in nestjs to table
      synchronize: true,
    }),
  ],
})
export class AppModule {}
