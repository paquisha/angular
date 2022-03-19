import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchoInputComponent } from './echo-input.component';

describe('EchoInputComponent', () => {
  let component: EchoInputComponent;
  let fixture: ComponentFixture<EchoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchoInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
