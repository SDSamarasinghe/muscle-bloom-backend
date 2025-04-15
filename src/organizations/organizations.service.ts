import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Organization } from './schemas/organization.schema';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectModel(Organization.name) private model: Model<Organization>,
    private readonly emailService: EmailService,
  ) {}

  async create(dto: CreateOrganizationDto) {
    return this.model.create(dto);
  }

  async findAll() {
    return this.model.find();
  }

  async findById(id: string) {
    return this.model.findById(id);
  }

  async remove(id: string) {
    return this.model.findByIdAndDelete(id);
  }

  async invite(email: string) {
    const inviteLink = `https://your-frontend-domain.com/register?email=${encodeURIComponent(email)}`;
    await this.emailService.sendInvitationEmail(email, inviteLink);
    return { message: 'Invitation sent!' };
  }
}
