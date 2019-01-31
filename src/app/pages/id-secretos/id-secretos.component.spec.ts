import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdSecretosComponent } from './id-secretos.component';

describe('IdSecretosComponent', () => {
  let component: IdSecretosComponent;
  let fixture: ComponentFixture<IdSecretosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdSecretosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdSecretosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
