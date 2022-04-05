import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[bold]',
})
export class BoldDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {
    //this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer");
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setStyles('bold', '120%');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setStyles('normal', '100%');
  }

  private setStyles(fontWeight: string, fontSize: string) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'font-weight',
      fontWeight
    );
    this.renderer.setStyle(this.element.nativeElement, 'font-size', fontSize);
  }
}
