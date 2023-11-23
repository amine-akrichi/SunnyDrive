import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeaturedCarsComponent } from './home-featured-cars.component';

describe('HomeFeaturedCarsComponent', () => {
  let component: HomeFeaturedCarsComponent;
  let fixture: ComponentFixture<HomeFeaturedCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeFeaturedCarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeFeaturedCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
