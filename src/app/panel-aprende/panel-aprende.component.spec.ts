import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAprendeComponent } from './panel-aprende.component';

describe('PanelAprendeComponent', () => {
  let component: PanelAprendeComponent;
  let fixture: ComponentFixture<PanelAprendeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelAprendeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAprendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
