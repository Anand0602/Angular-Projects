import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sibling1Component } from './sibling1.component';

describe('Sibling1Component', () => {
  let component: Sibling1Component;
  let fixture: ComponentFixture<Sibling1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sibling1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sibling1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
