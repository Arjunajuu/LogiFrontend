import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  constructor() {}
 
  public saveItem(key: string, value: any) {
    sessionStorage.setItem(key, value);
  }
  public getItem(key: string): any {
    return sessionStorage.getItem(key);
  }
  public removeItem(key: string) {
    sessionStorage.removeItem(key);
  }
  public clear() {
    sessionStorage.clear();
  }
}