import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesManagerComponent } from './states-manager.component';

describe('StatesManagerComponent', () => {
  let component: StatesManagerComponent;
  let fixture: ComponentFixture<StatesManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatesManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
