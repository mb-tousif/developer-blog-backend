import {
  BadRequestException,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';
import { User, UserDocument } from './users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from './users.dto';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}
  // create user
  async createUser(user: UserDto): Promise<UserDocument> {
    try {
      const createdUser = await this.userModel.create(user);
      return createdUser;
    } catch (error) {
      if (error.name === 'ValidationError') {
        throw new BadRequestException(error.errors);
      }

      throw new ServiceUnavailableException();
    }
  }
  // get all users
  async getAllUsers(): Promise<UserDocument[]> {
    try {
      const users = await this.userModel.find();
      return users;
    } catch (error) {
      throw new ServiceUnavailableException();
    }
  }
}
