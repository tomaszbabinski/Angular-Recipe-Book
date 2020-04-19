import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth-service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {

  constructor(private authService: AuthService) { }
  isLoginMode = true;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {

    if (!form.value) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {
      //
    } else {
      this.authService.signUp(email, password).subscribe(responseDate => {
        console.log(responseDate);
      }, error => {
        console.log(error);
      });
    }
  }
}

