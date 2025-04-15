// src/orders/dto/create-order.dto.ts
export class CreateOrderDto {
  customerEmail: string;
  products: string[];
  total: number;
}
