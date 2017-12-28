import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSystemComponent } from './grid-system.component';

describe('GridSystemComponent', () => {
  let component: GridSystemComponent;
  let fixture: ComponentFixture<GridSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
