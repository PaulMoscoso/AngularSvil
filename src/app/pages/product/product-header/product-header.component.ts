import { Component, Input,OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss']
})
export class ProductHeaderComponent implements OnInit {

  constructor(private productService: ProductService){

  }

  inputCounter: number = 0;
  ngOnInit(): void {
    ///throw new Error('Method not implemented.');
    this.productService.getCounter.subscribe(resp =>{
      this.inputCounter = resp;
    });


  }
  //@Input() inputCounter: number = 0;



}
