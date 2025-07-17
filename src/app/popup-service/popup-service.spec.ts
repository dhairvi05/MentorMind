import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupService } from './popup-service';

describe('PopupService', () => {
  let component: PopupService;
  let fixture: ComponentFixture<PopupService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
