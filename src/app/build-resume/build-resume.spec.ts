import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildResume } from './build-resume';

describe('BuildResume', () => {
  let component: BuildResume;
  let fixture: ComponentFixture<BuildResume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildResume]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildResume);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
