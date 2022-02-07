import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { User } from 'src/app/models/users.interface';
import { AuthService } from 'src/app/services/Auth/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  public registrationForm!: FormGroup;
  public emailError: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    this.registrationForm = new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ]),
      passwordChek: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        passEqual(),
      ])
    })
  };

  ngOnInit(): void {
    this.authService.logOut(); 
  }

  public get email() { return this.registrationForm.get('email')};
  public get password() { return this.registrationForm.get('password')};
  public get passwordChek() { return this.registrationForm.get('passwordChek')}

  saveUserData() {
    this.authService.checkEmail(this.email?.value).subscribe((user: User) => {
      if (user) {
        this.emailError = true;
      } else {
        this.authService.registrationNewUser(this.email?.value, this.password?.value)
          .pipe(
            switchMap((user): any => {
              console.log(user);
              this.emailError = false;
              return this.authService.checkUser(this.email?.value, this.password?.value)})
            )
            .subscribe((user: User[] | any) => {
              if(user){
                console.log(user);
                localStorage.setItem('token', user.token);
                this.registrationForm.reset();
                this.router.navigate(['/categories']);
              };
            });
      };
    });
  };

  loginRedirect(){
    this.router.navigate(['/login']);
  }
}

export const passEqual = (): ValidatorFn => {
  return (registrationForm: AbstractControl): ValidationErrors | null => {
    const password: AbstractControl | undefined | null = registrationForm?.parent?.get('password'); 
    const isEqual = password?.value === registrationForm?.value;    
    return isEqual ? null : {notEqualPassword: {value: true}}
  }
}
