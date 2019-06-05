import { Service } from './service.abstract';
import { NotyfService } from 'ng-notyf';

declare var $: any;

export abstract class Componente {

  idEdit: string;
  idDelete: string;

  constructor(public service: Service, public notyfService: NotyfService, private fields: string[]) {
    this.notyfService.toastDelay = 5000;
    this.getItems(fields);
    this.clean();
  }

  getItems(fields: string[]) {
    this.service.getItems(fields).subscribe((res) => {
      if (res.errors) {
        this.notyfService.error(res.errors[0].message);
      }
      console.log(res);
    });
  }

  addItem(item: any) {
    if (this.idEdit !== '') {
      this.service.updateItem(item, this.fields).subscribe((res) => {
        console.log(res);
        const response = JSON.stringify(res);
        this.notyfService.success(JSON.parse(response).message);
        this.getItems(this.fields);
      });
    } else {
      this.service.createItem(item, this.fields).subscribe((res) => {
        console.log(res);
        const response = JSON.stringify(res);
        this.notyfService.success(JSON.parse(response).message);
        this.getItems(this.fields);
      });
    }
    this.clean();
  }

  deleteItem() {
    this.service.deleteItem(this.idDelete).subscribe((res) => {
      console.log(res);
      const response = JSON.stringify(res);
      this.notyfService.error(JSON.parse(response).message);
      this.getItems(this.fields);
      this.clean();
    });
  }

  abstract edit(item: any): void;

  clean() {
    this.idEdit = '';
    this.idDelete = '';
    this.resetItem();
  }

  abstract resetItem(): void;

  getDate() {
    const date = new Date();
    return this.format(date.getDate()) + '/' + this.format(date.getMonth() + 1) + '/' + date.getFullYear();
  }

  getHour() {
    const date = new Date();
    return this.format(date.getHours()) + ':' + this.format(date.getMinutes());
  }

  private format(n: number) {
    if (n.toString().length < 2) {
      return '0' + n;
    } else {
      return n;
    }
  }

  getKeyForDelete(key: string) {
    console.log(key);
    this.idDelete = key;
  }

}
