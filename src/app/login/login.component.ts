import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionStorageService } from '../sessionstorage.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
username:string | undefined;
password:string |undefined;
  constructor(private authService: AuthService,
  private sessionstorage : SessionStorageService,
    private router: Router) { }

    public myForm =new FormGroup({
    username:new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
    })  
  
  onSubmit() {
    const {username , password}=this.myForm.value;
    if (this.authService.login(username,password)) {
      this.sessionstorage.saveItem('username',this.myForm.value.username);
      this.router.navigate(["dashboard"]);
    }
    else
    {
      alert('invalid credentials');
    }
    }
  }
