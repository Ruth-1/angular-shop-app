import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../types';
import { RatingModule } from 'primeng/rating'; // Import PrimeNG's Rating module for displaying ratings
import { FormsModule } from '@angular/forms'; // Import Angular's FormsModule for two-way binding

@Component({
  selector: 'app-product', // Defines the selector for this component, used in templates as <app-product>
  standalone: true,
  imports: [RatingModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  // Decorator to bind an input property to the component. This property will be passed down from the parent component.

  @Input()
  product!: Product; // The `product` input is expected to be of type `Product`. The `!` operator asserts that the value is never null or undefined.

  // Decorator to define an output event that the component can emit to its parent.
  @Output() edit: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() delete: EventEmitter<Product> = new EventEmitter<Product>();

  editProduct() {
    this.edit.emit(this.product);
  }

  deleteProduct() {
    this.delete.emit(this.product);
  }
  // Lifecycle hook that is called after the component is initialized.
  ngOnInit() {
    // Emits the product data as an event when the component is initialized.
    // This allows the parent component to listen for the event and handle the product data.
  }
}

// Input/Output: The ProductComponent takes an input of type Product, which is passed from its parent component. It also emits an event (productOutput) when the component is initialized, sending the product data back to the parent component. This is useful if the parent component needs to perform any actions with the product data when the component is created.
