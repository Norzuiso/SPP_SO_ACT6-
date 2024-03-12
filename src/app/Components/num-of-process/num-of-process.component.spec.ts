import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumOfProcessComponent } from './num-of-process.component';

describe('NumOfProcessComponent', () => {
  let component: NumOfProcessComponent;
  let fixture: ComponentFixture<NumOfProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumOfProcessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumOfProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
