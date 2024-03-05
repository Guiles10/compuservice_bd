import { plainToInstance } from 'class-transformer'
import { CreateUserDto } from '../../dto/create-user.dto'
import { UpdateUserDto } from '../../dto/update-user.dto'
import { User } from '../../entities/user.entity'
import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../user.repository';

@Injectable()
export class UsersInMemoryRepository implements UsersRepository {

    private database: User[] = []

    create(data: CreateUserDto): User | Promise<User> {
        const newUser = new User()
        Object.assign(newUser, {
           ...data
        })
        this.database.push(newUser)
        return plainToInstance(User, newUser)
    }

    findAll(): any | Promise<any> {
        return plainToInstance(User, this.database)
    }
    
    findOne(id: string): User | Promise<User> {
        const user = this.database.find((user) => user.id == id)
        return plainToInstance(User, user)
    }

    findByEmail(email: string): User | Promise<User> {
        const user = this.database.find((user) => user.email == email)
        return user
    }

    findByName(name: string): User | Promise<User> {
        const user = this.database.find((user) => user.name == name)
        return user
    }

    update(id: string, data: UpdateUserDto): any | Promise<any> {
        // const userIndex = this.database.findIndex((user) => user.id == id)
        // this. database[userIndex] = {
        //     ...this.database[userIndex],
        //     ...data
        // }
        // return plainToInstance(User, this.database[userIndex])
    }

    delete(id: string): void | Promise<void> {
        const userIndex = this.database.findIndex((user) => user.id == id)
        this.database.splice(userIndex, 1)
    }

}
