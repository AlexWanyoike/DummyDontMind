import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockformComponent } from './blockform.component';

describe('BlockformComponent', () => {
  let component: BlockformComponent;
  let fixture: ComponentFixture<BlockformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
