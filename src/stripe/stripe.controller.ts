import { Controller, Post, Body } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post('checkout')
  createSession(
    @Body() body: { name: string; price: number; quantity: number },
  ) {
    return this.stripeService.createCheckoutSession(body);
  }
}
