import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasHolderComponent } from './canvas-holder.component';

describe('CanvasHolderComponent', () => {
  let component: CanvasHolderComponent;
  let fixture: ComponentFixture<CanvasHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
