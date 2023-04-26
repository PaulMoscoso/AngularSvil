import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

 // @Output() eventCounter = new EventEmitter<number>()

  counterList: number = 0;

  constructor(private productService: ProductService){

  }

  counter(){
    this.counterList++;
    //this.eventCounter.emit(this.counterList++);
    this.productService.setCounter = this.counterList
  }

}
