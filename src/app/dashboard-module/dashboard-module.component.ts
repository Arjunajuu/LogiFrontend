import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { SessionStorageService } from '../sessionstorage.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-module',
  templateUrl: './dashboard-module.component.html',
  styleUrl: './dashboard-module.component.scss'
})
export class DashboardModuleComponent implements OnInit{
  today = new Date();
  userData: any;
  userData2:any
  constructor(private router: Router,private sessionstorage : SessionStorageService,
    public datepipe: DatePipe){}
  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.userData2=this.datepipe.transform(this.today,'dd/MM/yyyy')
    this.userData = this.sessionstorage.getItem('username');
  }
 logout(){
  this.userData = this.sessionstorage.clear();
  this.router.navigate(["/login"])}
}

