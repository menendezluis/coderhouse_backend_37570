import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): {
        message: string;
        newUser: import("./entities/user.entity").User;
    };
    findAll(query: any): {
        statrus: string;
        users: import("./entities/user.entity").User[];
    };
    findOne(id: string): import("./entities/user.entity").User;
    update(id: string, updateUserDto: UpdateUserDto): {
        message: string;
        user: import("./entities/user.entity").User;
    };
    remove(id: string): {
        message: string;
    };
}
