import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { Inventory } from 'src/app/interfaces/inventory';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {

  inventory: Inventory;
  user: User;

  constructor(private router: Router, private us: UserService, private is: InventoryService) {
    this.getUser();
  }

  ngOnInit() {
  }

  logOut() {
    sessionStorage.removeItem('_id');
    sessionStorage.removeItem('rol');
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getUser() {
    const id = sessionStorage.getItem('_id');
    this.us.getItem(id, ['firstname', 'inventory']).subscribe(() => {
      this.user = this.us.item.user;
      if (!this.user) {
        this.router.navigate(['/login']);
      }
      this.getInventory(this.user.inventory);
    });
  }

  getInventory(id: string) {
    this.is.getItem(id, ['name', '_id']).subscribe(() => {
      this.inventory = this.is.item.inventory;
      sessionStorage.setItem('_idInventory', this.inventory._id);
    });

  }


}
