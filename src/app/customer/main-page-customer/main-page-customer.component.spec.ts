import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageCustomerComponent } from './main-page-customer.component';

describe('MainPageCustomerComponent', () => {
  let component: MainPageCustomerComponent;
  let fixture: ComponentFixture<MainPageCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
