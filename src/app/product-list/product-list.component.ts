  
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../custom-service/product.service';
import { Product } from '../product-list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []
  wishlist: number[] = []

  constructor(
    private productService: ProductService,
    // private wishlistService: WishlistService
  ) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    // this.productService.getProducts().subscribe((products) => {
    //   this.productList = products;
    // })
  }

}