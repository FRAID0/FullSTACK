import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationkundeComponent } from './informationkunde.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CustomerService } from '../../Service/customer.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('InformationkundeComponent', () => {
  let component: InformationkundeComponent;
  let fixture: ComponentFixture<InformationkundeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationkundeComponent ],
      imports : [HttpClientTestingModule],
      providers : [CustomerService],
      schemas : [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationkundeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
