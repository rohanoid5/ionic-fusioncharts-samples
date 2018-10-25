import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChartDataComponent } from './update-chart-data.component';

describe('UpdateChartDataComponent', () => {
  let component: UpdateChartDataComponent;
  let fixture: ComponentFixture<UpdateChartDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateChartDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateChartDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
