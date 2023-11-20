import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiMlSectionComponent } from './ai-ml-section.component';

describe('AiMlSectionComponent', () => {
  let component: AiMlSectionComponent;
  let fixture: ComponentFixture<AiMlSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiMlSectionComponent]
    });
    fixture = TestBed.createComponent(AiMlSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
