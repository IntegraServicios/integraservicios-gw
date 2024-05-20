import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { ResourcesModule } from './resources/resources.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { IsResourcesModule } from './is-resources/is-resources.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    ResourcesModule,
    UserModule,
    IsResourcesModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
