import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralsurgeryComponent } from './generalsurgery.component';

describe('GeneralsurgeryComponent', () => {
  let component: GeneralsurgeryComponent;
  let fixture: ComponentFixture<GeneralsurgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralsurgeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralsurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
