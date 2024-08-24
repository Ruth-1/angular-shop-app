import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Product } from '../../../types';
import { RatingModule } from 'primeng/rating'; // Import PrimeNG's Rating module for displaying ratings
import { FormsModule } from '@angular/forms'; // Import Angular's FormsModule for two-way binding
import { ButtonModule } from 'primeng/button';
import { ConfirmationService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { PricePipe } from '../../pipes/price.pipe';
import { TruncateNamePipe } from '../../pipes/truncate-name.pipe';

@Component({
  selector: 'app-product', // Defines the selector for this component, used in templates as <app-product>
  standalone: true,
  imports: [
    RatingModule,
    FormsModule,
    ButtonModule,
    ConfirmPopupModule,
    ToastModule,
    PricePipe,
    TruncateNamePipe,
  ],
  providers: [ConfirmationService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  constructor(private confirmationService: ConfirmationService) {}
  // Decorator to bind an input property to the component. This property will be passed down from the parent component.

  @ViewChild('deleteButton') deleteButton: any;
  @Input()
  product!: Product; // The `product` input is expected to be of type `Product`. The `!` operator asserts that the value is never null or undefined.

  // Decorator to define an output event that the component can emit to its parent.
  @Output() edit: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() delete: EventEmitter<Product> = new EventEmitter<Product>();

  truncateName(name: string) {
    if (name.length > 17) {
      return name.slice(0, 17) + '...';
    }
    return name;
  }
  editProduct() {
    this.edit.emit(this.product);
  }
  confirmDelete() {
    this.confirmationService.confirm({
      target: this.deleteButton.nativeElement,
      message: 'Are you sure that you want to delete this product?',
      accept: () => {
        this.deleteProduct();
      },
    });
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
