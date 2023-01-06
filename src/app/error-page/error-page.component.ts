import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../services/error-handler.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  error: HttpErrorResponse ;
  constructor(private router: Router, private errorHandlerService: ErrorHandlerService ) { }

  ngOnInit(): void {
    this.error = this.errorHandlerService.get();
  }
}
