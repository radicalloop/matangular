import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherElementsComponent } from './other-elements.component';

describe('OtherElementsComponent', () => {
  let component: OtherElementsComponent;
  let fixture: ComponentFixture<OtherElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
