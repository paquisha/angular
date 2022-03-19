import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EchoService {
  message: string = '';

  constructor() { }
}
