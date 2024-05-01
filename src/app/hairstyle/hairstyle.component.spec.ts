import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairstyleComponent } from './hairstyle.component';

describe('HairstyleComponent', () => {
  let component: HairstyleComponent;
  let fixture: ComponentFixture<HairstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HairstyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HairstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
