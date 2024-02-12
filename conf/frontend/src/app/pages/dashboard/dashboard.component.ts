import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { OrderService } from 'src/app/Service/order.service';
import { TotalrevenueService } from 'src/app/Service/totalrevenue.service';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
HighchartsMore(Highcharts);



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  orders: any;
  revenues : any[] = [];


  constructor(
      private orderService: OrderService,
      private totalRevenueService : TotalrevenueService
    ) {}

  ngOnInit(): void {

   
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
    });

    this.totalRevenueService.getTotalalrevenue().subscribe((data) => {
       this.revenues = data;
     });


  }



}



