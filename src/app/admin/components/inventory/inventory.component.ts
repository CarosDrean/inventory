import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styles: []
})
export class InventoryComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    console.log(router.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
  }

}
