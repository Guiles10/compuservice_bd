import { ConflictException, Injectable, NotAcceptableException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/user.repository';

@Injectable()
export class UsersService {

  constructor(private userRepository: UsersRepository){}

  async create(createUserDto: CreateUserDto) {
    const findUser = this.userRepository.findByEmail(createUserDto.email)
    if(findUser){
      throw new ConflictException("E-mail already existe")
    }
    const user = await this.userRepository.create(createUserDto)
    return user
  }

  async findAll() {
    const users = await this.userRepository.findAll()
    return users
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne(id)
    if(!user){
      throw new NotAcceptableException("User Not Found!")
    }
    return user
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findByEmail(email)
    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.update(id, updateUserDto)
    if(!user){
      throw new NotAcceptableException("User Not Found!")
    }
    return user
  }

  async remove(id: string) {
    const user = await this.userRepository.findOne(id)
    
    if(!user){
      throw new NotAcceptableException("User Not Found!")
    }
    await this.userRepository.delete(id)
    return
  }
}
