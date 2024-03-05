import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'Login';
  showPassword = false;
  
  constructor(private titleService: Title, private as:AuthService,private route:Router){ 
    titleService.setTitle(this.title);
  }

  clicking(){
    this.showPassword = !this.showPassword;
  }

  login(email: any, password: any) {
  
    this.as.login(email.control.value, password.control.value).then((val) => {
        console.log(val);
        alert('successfully logged in');
        this.route.navigateByUrl('/dashboard')
      })
      .catch((val) => alert('email or password not matched'));
  }
}
