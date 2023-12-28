import {
  BadRequestException,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';
import { User, UserDocument } from './users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: UserDocument,
  ) {}

  async createUser(user: UserDto) {
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
}
