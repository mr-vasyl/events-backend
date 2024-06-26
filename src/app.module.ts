import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserService } from './user/user.service'
import { UserModule } from './user/user.module'
import { PrismaService } from './prisma/prisma.service'

@Module({
	imports: [UserModule],
	controllers: [AppController],
	providers: [AppService, PrismaService, UserService]
})
export class AppModule {}
