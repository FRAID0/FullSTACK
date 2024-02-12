import { Component , OnInit} from '@angular/core';
import { Chart } from 'angular-highcharts';
import { CustomerService } from 'src/app/Service/customer.service';

@Component({
  selector: 'app-topcustomerbyoder',
  templateUrl: './topcustomerbyoder.component.html',
  styleUrls: ['./topcustomerbyoder.component.css']
})
export class TopcustomerbyoderComponent implements OnInit{

  
  barChart = new Chart({
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Top Customers by Order',
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

  formInvalid: boolean = false;
  numberOfBestCustomers!: number;
  revenues : any[] = [];
  selectedPeriod!: string;
  startDate: string = ''; 
  endDate: string = ''; 

  constructor(
    private customerService: CustomerService,) {}

  ngOnInit(): void {
    this.loadTopCustomersByOrders(2, '2022-01-01:2023-01-01');
  }


  loadTopCustomersByOrders(numbers: number, period: string): void {
    this.customerService.getBestCustomersByOrders(numbers, period).subscribe((data) => {
      const customerNames = data.map((customer) => customer.c_name);
      const orderQuantities = data.map((customer) => parseInt(customer.quantity, 10));
  
      this.barChart = new Chart({
        chart: {
          type: 'bar',
        },
        title: {
          text: 'Top Customers by Order',
        },
        xAxis: {
          categories: customerNames,
        },
        yAxis: {
          title: {
            text: 'Number of Orders',
          },
        },
        series: [
          {
            name: 'Number of Orders',
            data: orderQuantities,
          } as any,
        ],
      });
    });
  }
  
    // Method to format the date in YYYY-MM-DD format
    formatDate(date: Date): string {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months range from 0 to 11
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  
  
    fetchBestCustomers(): void {
      if (this.numberOfBestCustomers && this.startDate && this.endDate) {
        const formattedStartDate = this.formatDate(new Date(this.startDate));
        const formattedEndDate = this.formatDate(new Date(this.endDate));
    
        // Continuez avec le reste de votre logique
        this.loadTopCustomersByOrders(this.numberOfBestCustomers, `${formattedStartDate}:${formattedEndDate}`);
      } else {
        console.error('Please enter the number of best customers and select a period.');
        alert('Please enter the number of best customers and select a period.');
      }
    }
    
  
  
  
  isValidForm(): boolean {
    return this.numberOfBestCustomers !== undefined && this.startDate !== undefined && this.endDate !== undefined;
  }
  
  
}
