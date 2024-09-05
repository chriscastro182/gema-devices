import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoContractModalComponent } from './info-contract-modal.component';

describe('InfoContractModalComponent', () => {
  let component: InfoContractModalComponent;
  let fixture: ComponentFixture<InfoContractModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoContractModalComponent]
    });
    fixture = TestBed.createComponent(InfoContractModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
