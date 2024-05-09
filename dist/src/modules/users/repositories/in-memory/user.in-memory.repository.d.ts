import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { User } from '../../entities/user.entity';
import { UsersRepository } from '../user.repository';
export declare class UsersInMemoryRepository implements UsersRepository {
    private database;
    create(data: CreateUserDto): User | Promise<User>;
    findAll(): any | Promise<any>;
    findOne(id: string): User | Promise<User>;
    findByEmail(email: string): User | Promise<User>;
    findByName(name: string): User | Promise<User>;
    update(id: string, data: UpdateUserDto): any | Promise<any>;
    delete(id: string): void | Promise<void>;
}
