import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablecontainerComponent } from './tablecontainer.component';

describe('TablecontainerComponent', () => {
  let component: TablecontainerComponent;
  let fixture: ComponentFixture<TablecontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablecontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
