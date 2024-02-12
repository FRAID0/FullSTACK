import { Component , OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Service/customer.service';

@Component({
  selector: 'app-informationkunde',
  templateUrl: './informationkunde.component.html',
  styleUrls: ['./informationkunde.component.css']
})
export class InformationkundeComponent implements OnInit {

  customers: any;

  constructor(
    private customerService: CustomerService ) {}

    ngOnInit(): void {
      
      this.customerService.getcustomer().subscribe((data) => {
        this.customers = data;
    
      });
  
    }

}
