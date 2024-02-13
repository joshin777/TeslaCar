import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../CarService.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  
  carId: number = 0;
  car: any | null = null;
  selectedColor: string = ''; 
  selectedImage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.carId = params['id'];
      this.fetchCarDetails(this.carId);
    });
  }

  fetchCarDetails(id: number): void {
    this.carService.getCarById(id).subscribe(
      (data: any) => {
        this.car = data;
        
        this.selectedColor = this.car.colors[0];
        this.selectedImage = this.car.images[this.selectedColor]; 
      },
      (error) => {
        console.error('Error fetching car details:', error);
      }
    );
  }

  changeColor(color: string): void {
    this.selectedColor = color;
    this.selectedImage = this.car.images[color]; 
  }

  navigateToCustomization(): void {
    this.router.navigate(['/customization', this.carId]); 
  }
}
