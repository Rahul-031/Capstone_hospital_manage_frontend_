import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRegAndListComponent } from './doctor-reg-and-list.component';

describe('DoctorRegAndListComponent', () => {
  let component: DoctorRegAndListComponent;
  let fixture: ComponentFixture<DoctorRegAndListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorRegAndListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorRegAndListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
