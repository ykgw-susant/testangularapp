import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeseriesdataComponent } from './timeseriesdata.component';

describe('TimeseriesdataComponent', () => {
  let component: TimeseriesdataComponent;
  let fixture: ComponentFixture<TimeseriesdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeseriesdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeseriesdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
