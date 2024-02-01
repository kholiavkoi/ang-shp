import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Product } from '../models/product'

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'https://fakestoreapi.com/'

  constructor(private http: HttpClient) {}

  getProducts(limit = 5) {
    return this.http.get<Product[]>(`${this.baseUrl}products?limit=${limit}`)
  }

  createProduct(product: Omit<Product, 'id'>) {
    return this.http.post<Product>(`${this.baseUrl}products`, product)
  }
}
