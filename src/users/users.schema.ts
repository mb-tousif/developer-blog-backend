/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document

export enum UserRole {
    USER = 'user',
    BLOGGER = 'blogger',
    DEVELOPER = 'developer',
    SUPER_ADMIN = "super_admin",
    ADMIN = 'admin',
}

@Schema({
  timestamps: true,
  collection: 'Users',
})
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: UserRole.USER })
  role: UserRole;

  @Prop({ default: false })
  isEmailVerified: boolean;

  @Prop({
    default:
      'https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg',
  })
  profilePicture: string;

  @Prop()
  contactNumber: string;

  @Prop()
  address: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
