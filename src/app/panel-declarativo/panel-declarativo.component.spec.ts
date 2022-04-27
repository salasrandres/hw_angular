import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDeclarativoComponent } from './panel-declarativo.component';

describe('PanelDeclarativoComponent', () => {
  let component: PanelDeclarativoComponent;
  let fixture: ComponentFixture<PanelDeclarativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelDeclarativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelDeclarativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
