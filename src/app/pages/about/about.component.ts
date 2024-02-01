import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ProductService } from '../../services/api/products/product.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  param: any
  queryParam: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProductService
  ) {}

  ngOnInit(): void {
    this.param = this.activatedRoute.snapshot.params['username']
    this.queryParam = this.activatedRoute.snapshot.queryParams['course']

    this.service.getProducts().subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
    })
  }
}
