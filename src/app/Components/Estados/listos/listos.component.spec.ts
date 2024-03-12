import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListosComponent } from './listos.component';

describe('ListosComponent', () => {
  let component: ListosComponent;
  let fixture: ComponentFixture<ListosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
