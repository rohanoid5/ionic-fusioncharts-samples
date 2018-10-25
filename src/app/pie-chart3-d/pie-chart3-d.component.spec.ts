import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChart3DComponent } from './pie-chart3-d.component';

describe('PieChart3DComponent', () => {
  let component: PieChart3DComponent;
  let fixture: ComponentFixture<PieChart3DComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChart3DComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChart3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
