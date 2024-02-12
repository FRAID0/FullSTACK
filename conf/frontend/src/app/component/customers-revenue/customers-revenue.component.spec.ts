import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersRevenueComponent } from './customers-revenue.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomerService } from '../../Service/customer.service';
import { Chart, ChartModule } from 'angular-highcharts';
import { charts } from 'highcharts';

describe('CustomersRevenueComponent', () => {
  let component: CustomersRevenueComponent;
  let fixture: ComponentFixture<CustomersRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersRevenueComponent ],
      imports : [HttpClientTestingModule , ChartModule],
      providers : [CustomerService],
      schemas : [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
