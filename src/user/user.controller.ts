import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { UserDto } from './user.dto'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post('register')
	async registerForEvent(@Body() dto: UserDto) {
		return this.userService.registerUserForEvent(dto)
	}

	@Get()
	async getAllUsersEvent(@Query('eventId') eventId: number | string) {
		return this.userService.getUsersForEvent(+eventId)
	}
}
