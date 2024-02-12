import { Component , OnInit} from '@angular/core';
import { CustomerService } from 'src/app/Service/customer.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-customers-revenue',
  templateUrl: './customers-revenue.component.html',
  styleUrls: ['./customers-revenue.component.css']
})
export class CustomersRevenueComponent implements OnInit{

  linechart = new Chart({
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Pie Chart',
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3],
      } as any,
    ],
  });

  dounetChart = new Chart({
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Bar Chart',
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3],
      } as any,
    ],
  });

  allChart = new Chart({
    chart: {
      type: 'line',
    },
    title: {
      text: 'Line Chart',
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 0],
      } as any,
    ],
  });

  barChart = new Chart({
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Top Customers by Orders',
    },
    xAxis: {
      categories: [],
    },
    yAxis: {
      title: {
        text: 'Number of Orders',
      },
    },
    series: [
      {
        name: 'Number of Orders',
        data: [],
      } as any,
    ],
  });

  customers: any;

  constructor(
    private customerService: CustomerService,) {}
  ngOnInit(): void {
    
    this.customerService.getcustomer().subscribe((data) => {
      this.customers = data;
      this.updateAllChart();
      this.updateDounetChart();
    });

  }

  
  updateAllChart(): void {
    this.allChart = new Chart({
      chart: {
        type: 'line',
      },
      title: {
        text: 'Customers Revenue',
      },
      xAxis: {
        categories: this.customers.map((customer: any) => customer.c_name),
      },
      series: [
        {
          name: 'Revenue',
          data: this.customers.map((customer: any) => customer.c_acctbal),
        } as any,
      ],
    });
  }

  updateDounetChart(): void {
    this.dounetChart = new Chart({
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Customer Revenue by order',
      },
      xAxis: {
        categories: this.customers?.map((customer: any) => customer.c_name) || [],
      },
      series: [
        {
          name: 'Orders',
          data: this.customers?.map((customer: any) => customer.c_acctbal) || [],
        } as any,
      ],
    });
  }

}
