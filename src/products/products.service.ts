// src/products/products.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private model: Model<Product>) {}

  async create(
    dto: CreateProductDto,
    imageUrl: string,
    organizationId: string,
  ) {
    return this.model.create({ ...dto, imageUrl, organizationId });
  }

  async findAll() {
    return this.model.find().populate('organizationId', 'name');
  }

  async findById(id: string) {
    return this.model.findById(id).populate('organizationId', 'name');
  }

  async delete(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}
