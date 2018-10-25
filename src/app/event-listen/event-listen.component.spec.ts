import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListenComponent } from './event-listen.component';

describe('EventListenComponent', () => {
  let component: EventListenComponent;
  let fixture: ComponentFixture<EventListenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
