import { PrismaService } from 'src/database/prisma.service';
import { UsersRepository } from '../user.repository';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { UpdateUserDto } from '../../dto/update-user.dto';
export declare class UserPrismaRepository implements UsersRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserDto): Promise<User>;
    findByName(name: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<User>;
    update(id: string, data: UpdateUserDto): Promise<any>;
    delete(id: string): Promise<void>;
}
