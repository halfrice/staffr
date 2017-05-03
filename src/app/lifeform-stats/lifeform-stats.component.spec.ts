import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeformStatsComponent } from './lifeform-stats.component';

describe('LifeformStatsComponent', () => {
  let component: LifeformStatsComponent;
  let fixture: ComponentFixture<LifeformStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeformStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeformStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
