import { Directive, ViewContainerRef } from '@angular/core'

@Directive({
  selector: '[viewer-container]',
})
export default class ViewerContainerDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
