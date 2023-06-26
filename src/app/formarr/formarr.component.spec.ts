import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormarrComponent } from './formarr.component';

describe('FormarrComponent', () => {
  let component: FormarrComponent;
  let fixture: ComponentFixture<FormarrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormarrComponent]
    });
    fixture = TestBed.createComponent(FormarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
