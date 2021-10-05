import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklytopComponent } from './weeklytop.component';

describe('WeeklytopComponent', () => {
  let component: WeeklytopComponent;
  let fixture: ComponentFixture<WeeklytopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklytopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklytopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
