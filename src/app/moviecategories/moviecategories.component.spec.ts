import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviecategoriesComponent } from './moviecategories.component';

describe('MoviecategoriesComponent', () => {
  let component: MoviecategoriesComponent;
  let fixture: ComponentFixture<MoviecategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviecategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviecategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
