import { Controller, Get, Post, Body } from '@nestjs/common';
import { HashService } from './hash.service';

@Controller('hash')
export class HashController {
    constructor(private readonly hashService: HashService){}
    @Get()
    isActive(): string {
        return 'Service Ready';
    }

    @Post()
    hashing(@Body() body){
        const word = this.hashService.create(body.word);
        return word;
    }

}
