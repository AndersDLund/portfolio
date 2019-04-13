import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostRecentPositionComponent } from './most-recent-position.component';

describe('MostRecentPositionComponent', () => {
  let component: MostRecentPositionComponent;
  let fixture: ComponentFixture<MostRecentPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostRecentPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostRecentPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
