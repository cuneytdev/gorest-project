import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestViewedUsersComponent } from './latest-viewed-users.component';

describe('LatestViewedUsersComponent', () => {
  let component: LatestViewedUsersComponent;
  let fixture: ComponentFixture<LatestViewedUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestViewedUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestViewedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
