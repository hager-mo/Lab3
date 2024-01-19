import { Component, Input } from '@angular/core';
import { DatePipe, NgClass, NgStyle } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() productItem: any; 

  constructor(private router : Router) {}

  redirectToDetails(id: number): void{
    console.log(id);
    this.router.navigate([`details/${id}`], {
      queryParams: {
        category: 'action',
      },
    });
  }
  // constructor(){
  //   console.log(this.productItem.id=1);
  // }
  // @NgOnInit(){
  //   console.log(this.productItem);
  // }
}
// function NgOnInit(): (target: ProductCardComponent, propertyKey: "") => void {
//   throw new Error('Function not implemented.');
// }

