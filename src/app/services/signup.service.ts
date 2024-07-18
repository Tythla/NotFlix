import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private formData: any = {};

  constructor(private http: HttpClient) {}

  updateForm(data: any) {
    this.formData = { ...this.formData, ...data };
  }

  getFormData() {
    return this.formData;
  }

  submitSignup(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/auth/signup', {
      ...this.formData,
      ...data,
    });
  }

  checkEmailExists(email: string): Observable<any> {
    return this.http.post('http://localhost:3000/auth/check-email', { email });
  }
}
