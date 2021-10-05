import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklynewsComponent } from './weeklynews.component';

describe('WeeklynewsComponent', () => {
  let component: WeeklynewsComponent;
  let fixture: ComponentFixture<WeeklynewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklynewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklynewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
