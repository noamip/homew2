import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideCComponent } from './aside-c.component';


describe('AsideCComponent', () => {
  let component: AsideCComponent;
  let fixture: ComponentFixture<AsideCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
