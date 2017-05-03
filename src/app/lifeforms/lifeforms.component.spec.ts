import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeformComponent } from './lifeform.component';

describe('LifeformComponent', () => {
  let component: LifeformComponent;
  let fixture: ComponentFixture<LifeformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
