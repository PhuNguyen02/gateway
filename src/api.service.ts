// api.service.ts
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private readonly httpService: HttpService) {}

  getMediaProducts(): Observable<any> {
    
    return this.httpService.get('localhost:8000/api/products/allProducts');
  }

  getClothProducts(): Observable<any> {
    return this.httpService.get('http://localhost:5000/api/products/getproducts');
  }

  getOrders(token: string): Observable<any> {
    return this.httpService.get('http://localhost:3000/api/products/orders', {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}
