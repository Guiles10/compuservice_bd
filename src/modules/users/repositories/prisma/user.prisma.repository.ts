
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UsersRepository } from '../user.repository';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { UpdateUserDto } from '../../dto/update-user.dto';

@Injectable()
export class UserPrismaRepository implements UsersRepository {

    constructor(private prisma: PrismaService){}

    async create(data: CreateUserDto): Promise<User> {
        const user = new User()
        Object.assign(user, {
           ...data,
        })
        const newUser = await this.prisma.user.create({data: {...data}})
        return newUser
    }

    async findAll(): Promise<any> {
        const user = await this.prisma.user.findAll()
        return user
    }
    
    async findOne(id: string): Promise<User> {
        const user = this.prisma.user.findUnique({
            where: {id}
        })
        return user   
    }

    findByEmail(email: string): User | Promise<User> {
        const user = this.prisma.user.find((user) => user.email == email)
        return user
    }

    async update(id: string, data: UpdateUserDto): Promise<User> {
        const userIndex = this.prisma.user.update({
            where: {id},
            data: {...data}
        })
        return userIndex
    }

    async delete(id: string): Promise<void> {
        this.prisma.user.delete({
            where: {id}
        })
    }
}
