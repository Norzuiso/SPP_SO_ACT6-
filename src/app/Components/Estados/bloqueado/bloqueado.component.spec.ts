import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueadoComponent } from './bloqueado.component';

describe('BloqueadoComponent', () => {
  let component: BloqueadoComponent;
  let fixture: ComponentFixture<BloqueadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloqueadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BloqueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
