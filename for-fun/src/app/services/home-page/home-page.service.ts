import { Injectable, signal } from '@angular/core';

export interface ProductCard {
  title: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  CARDS = signal<ProductCard[]>([
    { title: 'Teams', description: 'Rugged protection for growing equipment', price: 1000.00 },
    { title: 'Enterprise', description: 'Advanced coverage for large-scale deployment', price: 2500.00 },
    { title: 'Personal', description: 'Affordable protection for individual users', price: 500.00 },
    { title: 'Group', description: 'Affordable protection for groups of companies', price: 750.00 }
  ]);
  constructor() { }

  get cards() {
    return this.CARDS();
  }
}
