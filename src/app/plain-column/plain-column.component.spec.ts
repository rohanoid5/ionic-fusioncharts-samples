import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainColumnComponent } from './plain-column.component';

describe('PlainColumnComponent', () => {
  let component: PlainColumnComponent;
  let fixture: ComponentFixture<PlainColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlainColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
