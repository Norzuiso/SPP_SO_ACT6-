import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcpComponent } from './bcp.component';

describe('BcpComponent', () => {
  let component: BcpComponent;
  let fixture: ComponentFixture<BcpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
