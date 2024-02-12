import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TotalrevenueService {
  private apiUrl = 'http://localhost:3000/revenues'; 
  constructor(private http: HttpClient) { }

  getTotalalrevenue(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getMonthlyRevenue(month: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/month?month_s=${month}`);
  }

  getYearlyRevenue(year: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/year?year_s=${year}`);
  }

  getNextYearRevenue(nextYear: number = 0): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/year/next`);
  }
  
}
