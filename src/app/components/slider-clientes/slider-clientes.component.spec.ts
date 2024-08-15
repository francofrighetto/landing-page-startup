import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderClientesComponent } from './slider-clientes.component';

describe('SliderClientesComponent', () => {
  let component: SliderClientesComponent;
  let fixture: ComponentFixture<SliderClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
