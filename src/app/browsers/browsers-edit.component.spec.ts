import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsersEditComponent } from './browsers-edit.component';

describe('BrowsersEditComponent', () => {
  let component: BrowsersEditComponent;
  let fixture: ComponentFixture<BrowsersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
