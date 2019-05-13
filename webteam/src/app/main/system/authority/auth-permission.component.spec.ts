import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPermissionComponent } from './auth-permission.component';

describe('AuthPermissionComponent', () => {
  let component: AuthPermissionComponent;
  let fixture: ComponentFixture<AuthPermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthPermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
