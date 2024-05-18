import { IsEmail, IsNumber, IsString } from '@nestjs/class-validator'

export class UserDto {
	@IsNumber()
	eventId: number

	@IsString()
	fullName: string

	@IsEmail()
	email: string

	@IsString()
	dateOfBirth: string

	@IsString()
	howDidYouHearAboutEvent: string
}
