import { TestBed } from "@angular/core/testing";
import { CustomerService } from "../../Service/customer.service"
import { BestcustomerComponent } from "./bestcustomer.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Customer } from "../../models/customer_model";
import { of } from "rxjs";

describe('BestcustomerComponent',  ( ) => {
  let custservice : CustomerService;

  beforeEach(() => {TestBed.configureTestingModule({
    declarations:[BestcustomerComponent],
    imports : [HttpClientTestingModule],
    schemas : [CUSTOM_ELEMENTS_SCHEMA],
    providers: [CustomerService]

  })
    custservice = TestBed.inject(CustomerService);
});
it('schould be created' , () => {
  const fixture = TestBed.createComponent(BestcustomerComponent);
  const app = fixture.componentInstance;
  expect(app).toBeTruthy();
});

  it('schould read correct number of customer' , () => {
    let spy = spyOn<CustomerService, any>( custservice,'getBestCustomers') 
    .and.returnValue(of([
      new Customer ('marc', 'mannheim' , '0123456987'),
      new Customer ('jusepf', 'lug' , '0123456987'),
      new Customer ('joel', 'worms' , '0123456987')
    ]));

    custservice.getBestCustomers(3).subscribe(customer => {
      expect(customer.length).toEqual(3);
    })

  })

})