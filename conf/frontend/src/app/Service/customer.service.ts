import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer_model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getcustomer(): Observable<any> {
    return this.http.get(`${this.apiUrl}/customer`);
  }

  getBestCustomers(numbers: number): Observable<Customer[]> {
    const apiUrl = `http://localhost:3000/customer/best?numbers=${numbers}`;
    return this.http.get<Customer[]>(apiUrl);
  }

  getBestCustomersByOrders(numbers: number, period: string): Observable<any[]> {
    const url = `${this.apiUrl}/customer/mostOrder?numbers=${numbers}&period=${period}`;
    return this.http.get<any[]>(url);
  }
  
  
}
