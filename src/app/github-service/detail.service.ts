import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DetailService {
  getDetail(): import("../github-class/details").Details {
    throw new Error('Method not implemented.');
  }



  constructor() { }
}
