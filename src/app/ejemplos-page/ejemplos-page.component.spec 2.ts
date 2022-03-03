import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplosPageComponent } from './ejemplos-page.component';

describe('EjemplosPageComponent', () => {
  let component: EjemplosPageComponent;
  let fixture: ComponentFixture<EjemplosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemplosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemplosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
