// product/product.controller.ts
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('medi')
  async getMediProducts() {
    return this.productService.getMediProducts();
  }

  @Get('guitar')
  async getGuitarProducts(){
    return this.productService.getGuitarProducts();
  }

  @Get('food')
  async getFoodProducts(){
    return this.productService.getFoodProducts();
  }

  @Get('hotel')
  async getHotelProducts(){
    return this.productService.getHotelProducts();
  }

  @Get('kiet')
  async getKietProducts(){
    return this.productService.getKietProducts();
  }

  @Get('chi')
  async getChiProducts(){
    return this.productService.getChiProducts();
  }

  @Get('kien')
  async getKienProducts(){
    return this.productService.getKienProducts();
  }

  @Get('nhom5')
  async getGroupfiveProducts(){
    return this.productService.getGroupfiveProducts();
  }

  @UseGuards(JwtAuthGuard)
  @Get('orders')
  async getOrders(@Req() req) {
    return this.productService.getOrders(req.headers.authorization);
  }
}
