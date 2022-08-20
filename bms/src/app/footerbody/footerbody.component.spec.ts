import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterbodyComponent } from './footerbody.component';

describe('FooterbodyComponent', () => {
  let component: FooterbodyComponent;
  let fixture: ComponentFixture<FooterbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterbodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
