import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueComponent } from './revenue.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TotalrevenueService } from '../../Service/totalrevenue.service';
import { FormsModule } from '@angular/forms';

describe('RevenueComponent', () => {
  let component: RevenueComponent;
  let fixture: ComponentFixture<RevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenueComponent ],
      imports : [HttpClientTestingModule, FormsModule],
      providers : [TotalrevenueService],
      schemas : [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
