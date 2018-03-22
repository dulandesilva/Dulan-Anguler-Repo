import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroEditReactiveComponent } from './hero-edit-reactive.component';

describe('HeroEditReactiveComponent', () => {
  let component: HeroEditReactiveComponent;
  let fixture: ComponentFixture<HeroEditReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroEditReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroEditReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
