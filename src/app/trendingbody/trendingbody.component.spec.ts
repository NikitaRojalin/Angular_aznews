import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingbodyComponent } from './trendingbody.component';

describe('TrendingbodyComponent', () => {
  let component: TrendingbodyComponent;
  let fixture: ComponentFixture<TrendingbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
