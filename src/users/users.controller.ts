import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.tdo';

@Controller('auth')
export class UsersController {
    @Post('/signup')
    createUser(@Body() body: CreateUserDto) {

    }
}
