import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ResourcesModule } from 'src/resources/resources.module';

@Module({
  imports: [ResourcesModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
