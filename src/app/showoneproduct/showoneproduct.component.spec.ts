import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowoneproductComponent } from './showoneproduct.component';

describe('ShowoneproductComponent', () => {
  let component: ShowoneproductComponent;
  let fixture: ComponentFixture<ShowoneproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowoneproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowoneproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
