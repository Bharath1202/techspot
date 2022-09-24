import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsAndHomeImprovementComponent } from './tools-and-home-improvement.component';

describe('ToolsAndHomeImprovementComponent', () => {
  let component: ToolsAndHomeImprovementComponent;
  let fixture: ComponentFixture<ToolsAndHomeImprovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsAndHomeImprovementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsAndHomeImprovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
