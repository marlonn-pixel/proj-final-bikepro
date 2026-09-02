import { Component, input } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  product = input.required<Product>();
}
