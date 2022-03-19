import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchoOuputComponent } from './echo-ouput.component';

describe('EchoOuputComponent', () => {
  let component: EchoOuputComponent;
  let fixture: ComponentFixture<EchoOuputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchoOuputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchoOuputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
