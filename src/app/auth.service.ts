import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

 login(username : any, password : any): boolean{
  return username === 'admin' && password === 'admin';
 }
}