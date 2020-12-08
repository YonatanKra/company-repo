import { StickyScrollDirective } from './sticky-scroll.directive';
import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StickyScrollModule } from '@unicorn/sticky-scroll';

@Component({
  selector: `host-component`,
  template: `<div *ngIf="show" id="wrapper" unicornStickyScroll style="height: 300px; width: 100%; overflow: scroll;">
    <div style="height: 1000px"></div>
  </div>`
})
class TestHostComponent {
  show = true;
}
describe('StickyScrollDirective', () => {
  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  beforeEach(async function() {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [StickyScrollModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    await fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new StickyScrollDirective({} as unknown as ElementRef);
    expect(directive).toBeTruthy();
  });

  it(`should restore the scrollTop of the directive's element`, async function() {
    function getWrappingElement() {
      return fixture.debugElement.query(By.css('[unicornStickyScroll]')).nativeElement;
    }
    const startingScrollTop = getWrappingElement().scrollTop;
    getWrappingElement().scrollTop = 500;
    testHostComponent.show = false;
    fixture.detectChanges();
    testHostComponent.show = true;
    fixture.detectChanges();

    expect(startingScrollTop).toEqual(0);
    expect(getWrappingElement().scrollTop).toEqual(500);
  });

});
