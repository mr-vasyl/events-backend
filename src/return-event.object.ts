import { Prisma } from '@prisma/client'

export const returnEventObject: Prisma.EventSelect = {
	id: true,
	title: true,
	description: true,
	eventDate: true,
	organizer: true
}
