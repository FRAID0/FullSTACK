import { Component, OnInit ,Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { TotalrevenueService } from 'src/app/Service/totalrevenue.service';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit{

  
  totalRevenue: any;
  monthlyRevenue: any;
  yearlyRevenue: any;
  nextYearRevenue: any;
  revenues : any[] = [];
  selectedMonth: number | null = null;
  selectedYear: number | null = null;

  constructor(private totalRevenueService : TotalrevenueService ) {}

  ngOnInit(): void {


    this.totalRevenueService.getTotalalrevenue().subscribe((data) => {
      this.totalRevenue = data[0]?.totalrevenue;
  
      
      this.totalRevenueService.getMonthlyRevenue(10).subscribe((monthlyData) => {
        this.monthlyRevenue = monthlyData[0]?.revenue10month;
        
      
        this.generateTimeChart(this.totalRevenue, this.monthlyRevenue, this.yearlyRevenue, this.nextYearRevenue);
      });
  
      this.totalRevenueService.getYearlyRevenue(2023).subscribe((yearlyData) => {
        this.yearlyRevenue = yearlyData[0]?.revenue2023month;
        
      
        this.generateTimeChart(this.totalRevenue, this.monthlyRevenue, this.yearlyRevenue, this.nextYearRevenue);
      });
  
      this.totalRevenueService.getNextYearRevenue().subscribe((nextYearData) => {
        this.nextYearRevenue = nextYearData.nextYearRevenue;
       
        this.generateTimeChart(this.totalRevenue, this.monthlyRevenue, this.yearlyRevenue, this.nextYearRevenue);
      });
    });
    
  }

  
  onShowRevenueButtonClick(): void {
   
    if (this.selectedMonth !== null && this.selectedMonth >= 1 && this.selectedMonth <= 12) {
      this.getMonthlyRevenue(this.selectedMonth);
    } else {
      
      console.error('invalid month');
      alert('Invalid month. Please enter a month between 1 and 12.');
    }
  }

  onShowYearlyRevenueButtonClick(): void {
    if (this.selectedYear !== null && this.selectedYear >= 2000 && this.selectedYear <= 2100) {
      this.getYearlyRevenue(this.selectedYear);
    } else {
      console.error('Année non valide');
    }
  }

  getMonthlyRevenue(month: number): void {
    console.log('Appel de getMonthlyRevenue');
    this.totalRevenueService.getMonthlyRevenue(month).subscribe((data) => {
      
      const key = 'revenue' + month + 'month';
  
     
      this.monthlyRevenue = data[0]?.[key];
      console.log(this.monthlyRevenue);
  
      this.generateTimeChart(this.totalRevenue, this.monthlyRevenue, this.yearlyRevenue, this.nextYearRevenue);
    });
  }
  
  getYearlyRevenue(year: number): void {
    this.totalRevenueService.getYearlyRevenue(year).subscribe(
      (data) => {

        const key = 'revenue' + year + 'month';
        this.yearlyRevenue = data[0]?.[key];
        this.generateTimeChart(this.totalRevenue, this.monthlyRevenue, this.yearlyRevenue, this.nextYearRevenue);
      },
      (error) => {
        console.error('Error retrieving annual income. Please try again:', error);
        alert('Error retrieving annual income. Please try again');
      }
    );
  }

  getCircleColor(index: number): string {
    // Define colors here based on the index
     const colors = ['blue', 'green', '#6643b5', '#f95959'];
     return colors[index];
   }


   getRevenueLabel(index: number): string {
    // Define labels here based on the index
    const labels = ['Total Revenue', 'Monthly Revenue', 'Yearly Revenue', 'Next Year Revenue'];
    return labels[index];
  }

  
generateTimeChart(totalRevenue: number, monthlyRevenue: number, yearlyRevenue: number, nextYearRevenue: number): void {
  const chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'All Revenues',
    },
    xAxis: {
      categories: ['', 'Monthly Revenue', 'Yearly Revenue', 'Next Year Revenue'],
    },
    yAxis: {
      title: {
        text: 'Revenue',
      },
    },
    series: [
      {
        name: 'Total Revenue',
        data: [totalRevenue],
      },
      {
        name: 'Monthly Revenue',
        data: [monthlyRevenue],
      },
      {
        name: 'Yearly Revenue',
        data: [yearlyRevenue],
      },
     
    ] as Highcharts.SeriesColumnOptions[], 
  };

  Highcharts.chart('timeChart', chartOptions);
}




}
