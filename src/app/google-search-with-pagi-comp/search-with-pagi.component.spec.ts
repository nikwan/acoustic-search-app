import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWithPagiComponent } from './search-with-pagi.component';

describe('SearchWithPagiComponent', () => {
  let component: SearchWithPagiComponent;
  let fixture: ComponentFixture<SearchWithPagiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchWithPagiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWithPagiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
