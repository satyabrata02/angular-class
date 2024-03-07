import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private showLogoutBtn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private auth: AngularFireAuth, private router: Router) {console.log("service started")}
  async signup(email: string, password: string) {
    try {
      const userCredential = await this.auth.createUserWithEmailAndPassword(
        email,
        password
      );
      return userCredential;
    } catch (error: any) {
      console.error('Signup error:', error.message);
      throw new Error(error.message);
    }
  }

  async login(email: string, password: string) {
    try {
      const userCredential = await this.auth.signInWithEmailAndPassword(
        email,
        password
      );
      return userCredential;
    } catch (error: any) {
      console.error('Login error:', error.message);
      throw new Error(error.message);
    }
  }

  async logout() {
    await this.auth.signOut();
    localStorage.removeItem('token');
    this.router.navigate(['/login']); // Redirect to login after logout
  }

  setBooleanValue(value: boolean): void {
    this.showLogoutBtn.next(value);
  }
  getBooleanValue(): BehaviorSubject<boolean> {
    return this.showLogoutBtn;
  }

}
