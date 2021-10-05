import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndmainComponent } from './indmain.component';

describe('IndmainComponent', () => {
  let component: IndmainComponent;
  let fixture: ComponentFixture<IndmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
