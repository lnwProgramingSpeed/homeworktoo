import { ActivatedRoute,Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { products } from '../../data/product-data';
import { ProductModel } from '../../models/product-model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  products: ProductModel[] = [];
  allProducts: ProductModel[] = products;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      if (category) {
        this.products = this.allProducts.filter(product => product.category === category);
      } else {
        this.products = this.allProducts;
      }
    });
  }

  viewProductDetail(productId: number) {
    this.router.navigate(['/main/product', productId]);
  }
}