import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderDialogComponent } from './loader-dialog.component';

describe('LoaderDialogComponent', () => {
  let component: LoaderDialogComponent;
  let fixture: ComponentFixture<LoaderDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
