import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPlantsComponent } from './popular-plants.component';

describe('PopularPlantsComponent', () => {
  let component: PopularPlantsComponent;
  let fixture: ComponentFixture<PopularPlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularPlantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
