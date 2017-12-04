import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfhUserDataComponent } from './wfh-user-data.component';

describe('WfhUserDataComponent', () => {
  let component: WfhUserDataComponent;
  let fixture: ComponentFixture<WfhUserDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfhUserDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfhUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
