import { Prisma } from '@prisma/client'

export const returnUserObject: Prisma.UserRegistrationSelect = {
	id: true,
	email: true,
	eventId: true,
	fullName: true,
	howDidYouHearAboutEvent: true,
	dateOfBirth: true
}
