import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpClient = inject(HttpClient)
  constructor() { }

  addTask(task:string){

  }
}
