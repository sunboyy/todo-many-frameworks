import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { SignInComponent } from './sign-in.component';
import { ApiService } from '../api.service';
import { ApiMockService } from '../api-mock.service';
import { AppRoutingModule } from '../app-routing.module';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ SignInComponent ],
      providers: [
        {
          provide: ApiService,
          useClass: ApiMockService
        },
        {
          provide: Router,
          useClass: AppRoutingModule
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
