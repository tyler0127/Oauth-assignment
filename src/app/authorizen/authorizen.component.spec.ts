import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizenComponent } from './authorizen.component';

describe('AuthorizenComponent', () => {
  let component: AuthorizenComponent;
  let fixture: ComponentFixture<AuthorizenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
