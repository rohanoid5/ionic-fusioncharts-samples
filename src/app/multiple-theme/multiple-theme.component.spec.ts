import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleThemeComponent } from './multiple-theme.component';

describe('MultipleThemeComponent', () => {
  let component: MultipleThemeComponent;
  let fixture: ComponentFixture<MultipleThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
