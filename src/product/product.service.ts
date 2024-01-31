import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ProductService {
  async getMediProducts(): Promise<any> {
    const response = await axios.get('https://medipharma-api.onrender.com/api/products/allProducts ');
    return response.data;
  }

  async getOrders(authToken: string): Promise<any> {
    // Add authentication logic here using the authToken
    const response = await axios.get('http://localhost:3000/api/products/orders');
    return response.data;
  }

  async getGuitarProducts():Promise<any> {
    const response = await axios.get('https://shop-guitar.onrender.com/app/products ')
    return response.data
  }

  async getFoodProducts(): Promise<any> {
    const response = await axios.get('https://foodie-finder-api.onrender.com/api/restaurant')
    return response.data
  }

  async getHotelProducts(): Promise <any> {
    const response = await axios.get('https://services-api-cdb2.onrender.com/api/hotels ')
    return response.data
  }

  async getKietProducts(): Promise<any>{
    const response = await axios.get('https://dull-gray-bullfrog-yoke.cyclic.app/api/category/all')
    return response.data
  }

  async getChiProducts(): Promise<any> {
    const response = await axios.get('https://4878-2001-ee0-4b7e-4c10-50cf-4a7f-ea69-1dd2.ngrok-free.app/api/get-products')
    return response.data
  }

  async getKienProducts(): Promise<any>{
    const response = await axios.get('https://service-api-qhk1.onrender.com/api/products')
    return response.data
  }

  async getGroupfiveProducts(): Promise <any>{
    const response = await axios.get('https://service-apiis.onrender.com/api/products')
    return response.data
  }
}
