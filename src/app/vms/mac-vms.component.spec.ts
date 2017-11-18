import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacVmsComponent } from './mac-vms.component';

describe('MacVmsComponent', () => {
  let component: MacVmsComponent;
  let fixture: ComponentFixture<MacVmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacVmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacVmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
