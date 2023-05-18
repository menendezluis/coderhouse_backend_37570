import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    users: Array<User>;
    constructor();
    create(createUserDto: CreateUserDto): {
        message: string;
        newUser: User;
    };
    findAll(): User[];
    findOne(id: number): User;
    update(id: number, updateUserDto: UpdateUserDto): {
        message: string;
        user: User;
    };
    remove(id: number): {
        message: string;
    };
}
