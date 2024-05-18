import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { UserDto } from './user.dto'
import { returnUserObject } from './return-user.object'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async registerUserForEvent(dto: UserDto) {
		try {
			return this.prisma.userRegistration.create({
				data: {
					...dto
				},
				select: returnUserObject
			})
		} catch (error) {
			console.error(error)
			throw new Error('Error saving participant data')
		}
	}

	async getUsersForEvent(eventId: number) {
		try {
			return this.prisma.userRegistration.findMany({
				where: { eventId },
				select: returnUserObject
			})
		} catch (error) {
			console.error(error)
			throw new Error('Error when receiving participant data')
		}
	}
}
