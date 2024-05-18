import { Injectable } from '@nestjs/common'
import { returnEventObject } from './return-event.object'
import { PrismaService } from './prisma/prisma.service'

@Injectable()
export class AppService {
	constructor(private prisma: PrismaService) {}

	async getEvents() {
		try {
			return await this.prisma.event.findMany({ select: returnEventObject })
		} catch (error) {
			console.error(error)
			throw new Error('Error receiving events')
		}
	}

	async searchEventsByTitle(title: string) {
		try {
			return await this.prisma.event.findMany({
				where: {
					title: {
						contains: title,
						mode: 'insensitive'
					}
				}
			})
		} catch (error) {
			console.error(error)
			throw new Error('Error receiving search params')
		}
	}
}
