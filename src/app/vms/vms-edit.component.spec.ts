import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmsEditComponent } from './vms-edit.component';

describe('VmsEditComponent', () => {
  let component: VmsEditComponent;
  let fixture: ComponentFixture<VmsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
