import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styles: []
})
export class InventoryComponent implements OnInit {

  constructor(private routerActive: ActivatedRoute, public ps: ProductService, private router: Router) {
    this.routeEvent(router);
  }

  // TODO: no debe mostrar que no es administrador, el notify

  ngOnInit() {
  }

  routeEvent(router: Router) {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        const id = this.routerActive.snapshot.paramMap.get('id');
        this.getProducts(id);
      }
    });
  }

  getProducts(id: string) {
    this.ps.getItemsId(id, ['name', 'model', 'price', 'stock']).subscribe();
  }

}
