import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../interfaces/product';
import { bikesEletricas, bikesEstradas, bikesMontanhas, bikesUrbanas } from '../../data/products';

@Component({
  imports: [ProductCard],
  selector: 'app-home-page',
  styleUrl: './home-page.css',
  templateUrl: './home-page.html',
})
export class HomePage {
    bikesUrbanas: Product[] = bikesUrbanas;
    bikesMontanhas: Product[] = bikesMontanhas;
    bikesEstradas: Product[] = bikesEstradas;
    bikesEletricas: Product[] = bikesEletricas;
}
