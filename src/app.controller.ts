import { Controller, Get, Query } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	async getAllEvents() {
		return this.appService.getEvents()
	}

	@Get('search')
	async searchEvents(@Query('title') title: string) {
		return this.appService.searchEventsByTitle(title)
	}
}
