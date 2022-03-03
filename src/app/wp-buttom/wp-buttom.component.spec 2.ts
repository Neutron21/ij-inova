import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpButtomComponent } from './wp-buttom.component';

describe('WpButtomComponent', () => {
  let component: WpButtomComponent;
  let fixture: ComponentFixture<WpButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WpButtomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WpButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
