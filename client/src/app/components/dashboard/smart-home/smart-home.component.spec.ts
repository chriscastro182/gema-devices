import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartHomeComponent } from './smart-home.component';

describe('SmartHomeComponent', () => {
  let component: SmartHomeComponent;
  let fixture: ComponentFixture<SmartHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartHomeComponent]
    });
    fixture = TestBed.createComponent(SmartHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
