import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopcustomerbyoderComponent } from './topcustomerbyoder.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomerService } from '../../Service/customer.service';
import { FormsModule } from '@angular/forms'; 
import { ChartModule } from 'angular-highcharts';

describe('TopcustomerbyoderComponent', () => {
  let component: TopcustomerbyoderComponent;
  let fixture: ComponentFixture<TopcustomerbyoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopcustomerbyoderComponent ],
      imports : [HttpClientTestingModule, FormsModule , ChartModule],
      providers : [CustomerService],
      schemas : [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopcustomerbyoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
