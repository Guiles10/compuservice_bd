
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UsersRepository } from '../user.repository';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserPrismaRepository implements UsersRepository {

    constructor(private prisma: PrismaService){}

    async create(data: CreateUserDto): Promise<User> {
        const user = new User()
        if(!data.isAdmin){
            data.isAdmin = false
        }
        Object.assign(user, {
           ...data,
        })
        const newUser = await this.prisma.user.create({data: {...user}})
        return plainToInstance(User, newUser)
    }

    async findAll(): Promise<any> {
        const user = await this.prisma.user.findMany()
        return plainToInstance(User, user)
    }
    
    async findOne(id: string): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: {id}
        })
        return plainToInstance(User, user)   
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: {email}
        })
        return user
    }

    async update(id: string, data: UpdateUserDto): Promise<User> {
        const userIndex = await this.prisma.user.update({
            where: {id},
            data: {...data}
        })
        return plainToInstance(User, userIndex)
    }

    async delete(id: string): Promise<void> {
        await this.prisma.user.delete({
            where: { id },
        });
    }
}
