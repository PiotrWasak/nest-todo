import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:2EpCUN70FapCKSMlVUVZ10shIUh5Udl8KJZEb95f2rHEIIhZ3fUUaNfQ32ihapS7@uwo48g8sg4c8s00ww404w84c:27017/?directConnection=true',
    ),
    TasksModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
