import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { UsersComponent } from './pages/users/users.component';
import { ChartModule } from 'angular-highcharts';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RevenueComponent } from './component/revenue/revenue.component';
import { BestcustomerComponent } from './component/bestcustomer/bestcustomer.component';
import { InformationkundeComponent } from './component/informationkunde/informationkunde.component';
import { CustomersRevenueComponent } from './component/customers-revenue/customers-revenue.component';
import { TopcustomerbyoderComponent } from './component/topcustomerbyoder/topcustomerbyoder.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReportsComponent,
    UsersComponent,
    RevenueComponent,
    BestcustomerComponent,
    InformationkundeComponent,
    CustomersRevenueComponent,
    TopcustomerbyoderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
