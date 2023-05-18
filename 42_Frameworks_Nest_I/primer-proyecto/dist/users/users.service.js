"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor() {
        this.users = [];
    }
    create(createUserDto) {
        const newUser = new user_entity_1.User();
        newUser.id = this.users.length + 1;
        newUser.first_name = createUserDto.first_name;
        newUser.last_name = createUserDto.last_name;
        newUser.email = createUserDto.email;
        newUser.password = createUserDto.password;
        newUser.avatar = createUserDto.avatar;
        this.users.push(newUser);
        return {
            message: 'User created successfully',
            newUser,
        };
    }
    findAll() {
        return this.users;
    }
    findOne(id) {
        return this.users.find((user) => user.id === id);
    }
    update(id, updateUserDto) {
        this.users[id - 1] = updateUserDto;
        return {
            message: 'User updated successfully',
            user: this.users[id - 1],
        };
    }
    remove(id) {
        this.users.splice(id - 1, 1);
        return {
            message: 'User deleted successfully',
        };
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map