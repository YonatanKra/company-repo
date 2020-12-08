import { AfterViewInit, Directive, ElementRef, OnDestroy } from '@angular/core';

@Directive({
  selector: '[unicornStickyScroll]'
})
export class StickyScrollDirective implements AfterViewInit, OnDestroy{

  constructor(private ref: ElementRef) { }

  ngOnDestroy(): void {
    const {scrollTop, id} = this.ref.nativeElement;
    localStorage.setItem(id, scrollTop);
  }

  ngAfterViewInit(): void {
    const scrollTop = localStorage.getItem(this.ref.nativeElement.id);
    this.ref.nativeElement.scrollTop = scrollTop;
  }

}
