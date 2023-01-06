import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  error: HttpErrorResponse;

  constructor(private router: Router) { }

  handleError() {
    this.router.navigate(['/error']);

  }

  set(error: HttpErrorResponse) {
    this.error = error;
  }

  get() {
    return this.error;
  }
}
