import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  type: 'joya' | 'ropa';
  gender: 'hombre' | 'mujer' | 'unisex';
  age: 'niños' | 'adultos';
  use: 'casual' | 'formal' | 'deportivo';
  price: number;
  image: string;
}

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.html',
})
export class Catalog {
  products = signal<Product[]>([
    { id: 1, name: 'Collar de Perlas Finas', type: 'joya', gender: 'mujer', age: 'adultos', use: 'formal', price: 120.00, image: '/images/catalog_joya.png' },
    { id: 2, name: 'Vestido de Noche Élite', type: 'ropa', gender: 'mujer', age: 'adultos', use: 'formal', price: 85.50, image: '/images/catalog_ropa_mujer.png' },
    { id: 3, name: 'Anillo de Diamante Puro', type: 'joya', gender: 'unisex', age: 'adultos', use: 'formal', price: 950.00, image: '/images/catalog_joya.png' },
    { id: 4, name: 'Chaqueta de Cuero Premium', type: 'ropa', gender: 'hombre', age: 'adultos', use: 'casual', price: 150.00, image: '/images/catalog_ropa_hombre.png' },
    { id: 5, name: 'Pendientes de Oro 24k', type: 'joya', gender: 'mujer', age: 'adultos', use: 'formal', price: 210.00, image: '/images/catalog_joya.png' },
    { id: 6, name: 'Camisa de Algodón Fit', type: 'ropa', gender: 'hombre', age: 'adultos', use: 'formal', price: 65.00, image: '/images/catalog_ropa_hombre.png' },
    { id: 7, name: 'Chaqueta Deportiva', type: 'ropa', gender: 'unisex', age: 'adultos', use: 'deportivo', price: 45.00, image: '/images/catalog_ropa_hombre.png' },
    { id: 8, name: 'Aretes Chapados Rose Gold', type: 'joya', gender: 'mujer', age: 'adultos', use: 'casual', price: 35.00, image: '/images/catalog_joya.png' },
    { id: 9, name: 'Casaca Cortavientos Striped', type: 'ropa', gender: 'mujer', age: 'adultos', use: 'deportivo', price: 110.00, image: '/images/catalog_ropa_mujer.png' },
    { id: 10, name: 'Polo V-Neck Solid', type: 'ropa', gender: 'mujer', age: 'adultos', use: 'casual', price: 25.00, image: '/images/catalog_ropa_mujer.png' },
    { id: 11, name: 'Casaca Moto Faux Leather', type: 'ropa', gender: 'mujer', age: 'adultos', use: 'casual', price: 60.00, image: '/images/catalog_ropa_mujer.png' },
    { id: 12, name: 'Polo Manga Larga Kids', type: 'ropa', gender: 'unisex', age: 'niños', use: 'casual', price: 55.00, image: '/images/catalog_ropa_nino.png' }
  ]);

  filterType = signal<'todos' | 'joya' | 'ropa'>('todos');
  filterGender = signal<'todos' | 'hombre' | 'mujer' | 'unisex'>('todos');
  filterAge = signal<'todos' | 'niños' | 'adultos'>('todos');
  filterUse = signal<'todos' | 'casual' | 'formal' | 'deportivo'>('todos');

  filteredProducts = computed(() => {
    return this.products().filter(p => {
      const matchType = this.filterType() === 'todos' || p.type === this.filterType();
      const matchGender = this.filterGender() === 'todos' || p.gender === this.filterGender();
      const matchAge = this.filterAge() === 'todos' || p.age === this.filterAge();
      const matchUse = this.filterUse() === 'todos' || p.use === this.filterUse();
      return matchType && matchGender && matchAge && matchUse;
    });
  });

  handleAction(action: string, product: Product) {
    alert(`Acción: ${action}\nProducto: ${product.name}\nPrecio: $${product.price}`);
  }
}
