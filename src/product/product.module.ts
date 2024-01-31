import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'; // Import JwtModule
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.ACCESS_TOKEN_SECRET || "7db9f58fed9e89dbc0d2a2e00e4dbaff4f160e99cff0902b2d2cc7f536897f35", 
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [ProductController],
  providers: [ProductService, JwtAuthGuard],
})
export class ProductModule {}
