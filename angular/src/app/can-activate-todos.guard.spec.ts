import { TestBed, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';

import { CanActivateTodosGuard } from './can-activate-todos.guard';
import { AppRoutingModule } from './app-routing.module';

describe('CanActivateTodosGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CanActivateTodosGuard,
        {
          provide: Router,
          useClass: AppRoutingModule
        }
      ]
    });
  });

  it('should ...', inject([CanActivateTodosGuard], (guard: CanActivateTodosGuard) => {
    expect(guard).toBeTruthy();
  }));
});
