import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContractModalComponent } from './edit-contract-modal.component';

describe('EditContractModalComponent', () => {
  let component: EditContractModalComponent;
  let fixture: ComponentFixture<EditContractModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditContractModalComponent]
    });
    fixture = TestBed.createComponent(EditContractModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
