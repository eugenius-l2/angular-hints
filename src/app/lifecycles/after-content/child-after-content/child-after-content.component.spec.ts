import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAfterContentComponent } from './child-after-content.component';

describe('ChildAfterContentComponent', () => {
  let component: ChildAfterContentComponent;
  let fixture: ComponentFixture<ChildAfterContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChildAfterContentComponent]
    });
    fixture = TestBed.createComponent(ChildAfterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
