import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { firebaseConfig } from '../../environments/environments';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  title = 'Register';

  constructor(
    private titleService: Title, 
    private as: AuthService, 
    private router: Router,
    private hc: HttpClient){ 

      titleService.setTitle(this.title);
  }

  appNumbersOnly(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'];

    if ( allowedKeys.includes(event.key) || (event.key >= '0' && event.key <= '9')) {
      return; // Allow: backspace, delete, arrow keys, and numbers
    } else {
      event.preventDefault();
    }
  }

  submit(form: any, username: any, phno: any, email: any, password: any, gender: any) {
    
    if( form.value.email === '' ) {
      alert("please fill the form");
    }
    else {
      this.as.signup(email.control.value, password.control.value)
        .then((val) => {
          console.log(val);
        }).catch((err) => console.log(err))

      const udata = {
        username: username.value,
        phno: phno.value,
        email: email.value,
        password: password.value,
        gender: gender.value
      };

      this.hc.post(firebaseConfig.databaseURL+'/users.json',udata)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
    alert("You are Successfully Registered");
    this.router.navigate([ '/login' ]);
  }
}
