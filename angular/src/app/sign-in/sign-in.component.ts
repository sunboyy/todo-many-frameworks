import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  public frm: FormGroup;

  public isBusy = false;
  public hasFailed = false;
  public showInputErrors = false;

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.frm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public doSignIn() {
    if (this.frm.invalid) {
      this.showInputErrors = true;
      return;
    }
    this.isBusy = true;
    this.hasFailed = false;
    const username = this.frm.get('username').value;
    const password = this.frm.get('password').value;
    this.api.signIn(username, password).subscribe(
      response => {
        this.auth.doSignIn(response.token, response.name);
        this.router.navigate(['todos']);
      },
      error => {
        this.isBusy = false;
        this.hasFailed = true;
      }
    );
  }
}
