import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecarticleComponent } from './recarticle.component';

describe('RecarticleComponent', () => {
  let component: RecarticleComponent;
  let fixture: ComponentFixture<RecarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecarticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
