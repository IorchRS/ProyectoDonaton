import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavEnmedioComponent } from './nav-enmedio.component';

describe('NavEnmedioComponent', () => {
  let component: NavEnmedioComponent;
  let fixture: ComponentFixture<NavEnmedioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavEnmedioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavEnmedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
