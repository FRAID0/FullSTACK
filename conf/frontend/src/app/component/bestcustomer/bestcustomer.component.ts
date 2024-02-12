import { Component , OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import { CustomerService } from 'src/app/Service/customer.service';

@Component({
  selector: 'app-bestcustomer',
  templateUrl: './bestcustomer.component.html',
  styleUrls: ['./bestcustomer.component.css']
})
export class BestcustomerComponent implements OnInit {
  numberOfBestCustomers!: number;
  userInput: number = 2;
  bestCustomers: any[] = []
  


  constructor(
    private customerService: CustomerService,) {}

    ngOnInit(): void {
      
      const numberOfCustomers = 2;
    
      /// Retrieve the top customers
      this.customerService.getBestCustomers(numberOfCustomers).subscribe((data) => {
        this.bestCustomers = data;
        console.log('un petit commentaire' , data)
        // Build the data object for Highcharts
        const chartData = this.bestCustomers.map((customer) => ({
          name: customer.c_name,
          y: customer.total,
        }));
   
        // Display the chart
        this.showBestCustomersChart(chartData);
      });
    }


    // Method to display the chart of top customers
showBestCustomersChart(data: any[]): void {
  const chartOptions: Highcharts.Options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Best Customers',
    },
    xAxis: {
      categories: data.map((customer) => customer.name),
    },
    yAxis: {
      title: {
        text: 'Total revenue',
      },
    },
    series: [
      {
        type: 'bar',  
        name: 'Total revenuel',
        data: data.map((customer) => customer.y),
      } as Highcharts.SeriesBarOptions, // Add this line to specify the series type
    ],
  };

 // Display the chart in the container with the ID 'bestCustomersChart'
  Highcharts.chart('bestCustomersChart', chartOptions);
}




 // Method to handle form submission
 onSubmit(): void {
  
  this.customerService.getBestCustomers(this.userInput).subscribe((data) => {
    this.bestCustomers = data;

   
    const chartData = this.bestCustomers.map((customer) => ({
      name: customer.c_name,
      y: customer.total,
    }));

    
    this.showBestCustomersChart(chartData);
  });
}
}
