import { Component, OnInit } from '@angular/core';
import { CarService } from '../CarService.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  products: any[] = []; 
  filteredProducts: any[] = [];
  searchQuery: string = '';
  selectedPriceRange: string = '';
  currentPage: number = 1;
  pageSize: number = 6;
  cars: any[] = [];
filteredCars: any;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.fetchCars();
    this.carService.getAll().subscribe((data: any) => {
      this.products = data;
      this.filteredProducts = [...this.products];
    });
  }
  filterProducts(): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
      (this.selectedPriceRange ? this.isPriceInRange(product.price) : true)
    );
  }

  // Helper function to check if product price is within the selected range
  isPriceInRange(price: number): boolean {
    const [min, max] = this.selectedPriceRange.split('-').map(Number);
    return price >= min && price <= max;
  }

  // Pagination: Change current page
  changePage(page: number): void {
    this.currentPage = page;
  }

  // Pagination: Calculate total number of pages
  get totalPages(): number[] {
    return Array(Math.ceil(this.filteredProducts.length / this.pageSize)).fill(0).map((x, i) => i + 1);
  }

  fetchCars(): void {
    this.carService.getAll().subscribe(
      (data: any[]) => {
        this.cars = data;
      },
      (error) => {
        console.error('Error fetching car data:', error);
      }
    );
  }
}
