import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiaxesComponent } from './multiaxes.component';

describe('MultiaxesComponent', () => {
  let component: MultiaxesComponent;
  let fixture: ComponentFixture<MultiaxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiaxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
