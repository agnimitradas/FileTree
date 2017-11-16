import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesListingComponent } from './files-listing.component';

describe('FilesListingComponent', () => {
  let component: FilesListingComponent;
  let fixture: ComponentFixture<FilesListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
