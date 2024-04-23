import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminadoNoDetailsComponent } from './terminado-no-details.component';

describe('TerminadoNoDetailsComponent', () => {
  let component: TerminadoNoDetailsComponent;
  let fixture: ComponentFixture<TerminadoNoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminadoNoDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TerminadoNoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
