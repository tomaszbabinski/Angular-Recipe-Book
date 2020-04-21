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
  isLoading = false;
  error: string = null;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {

    if (!form.value) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    if (this.isLoginMode) {
      //
    } else {
      this.authService.signUp(email, password).subscribe(responseDate => {
        console.log(responseDate);
        this.isLoading = false;
      }, error => {
        console.log(error);
        this.error = 'An Error occured!';
        this.isLoading = false;
      });
    }
  }
}
