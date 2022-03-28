import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEntriesDialogComponent } from './delete-entries-dialog.component';

describe('DeleteEntriesDialogComponent', () => {
  let component: DeleteEntriesDialogComponent;
  let fixture: ComponentFixture<DeleteEntriesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEntriesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEntriesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
