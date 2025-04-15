// src/orders/orders.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './schemas/orders.schema';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private model: Model<Order>) {}

  async create(dto: CreateOrderDto) {
    return this.model.create(dto);
  }

  async findAll() {
    return this.model.find().populate('products');
  }
}
