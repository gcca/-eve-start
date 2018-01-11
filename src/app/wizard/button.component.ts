import { HostListener } from '@angular/core';

export default abstract class ButtonComponent {

  protected abstract action($event: MouseEvent): void;

  @HostListener('click', ['$event'])
  protected onClick($event: MouseEvent): void {
    $event.stopPropagation();
    this.action($event);
  }
}
