// src/organizations/schemas/organization.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Organization extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ default: false })
  isVerified: boolean;
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
