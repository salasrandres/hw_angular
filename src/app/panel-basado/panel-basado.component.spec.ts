import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelBasadoComponent } from './panel-basado.component';

describe('PanelBasadoComponent', () => {
  let component: PanelBasadoComponent;
  let fixture: ComponentFixture<PanelBasadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelBasadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelBasadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
