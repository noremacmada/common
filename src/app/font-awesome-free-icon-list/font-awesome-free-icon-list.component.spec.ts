import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontAwesomeFreeIconListComponent } from './font-awesome-free-icon-list.component';

describe('FontAwesomeFreeIconListComponent', () => {
  let component: FontAwesomeFreeIconListComponent;
  let fixture: ComponentFixture<FontAwesomeFreeIconListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontAwesomeFreeIconListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontAwesomeFreeIconListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
