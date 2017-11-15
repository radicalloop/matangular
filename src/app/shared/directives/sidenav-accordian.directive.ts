import { Directive, ElementRef, Input, Output, HostBinding, HostListener, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Directive({
  selector: '[sidenavAccordian]'
})
export class SidenavAccordionDirective implements OnInit {

  constructor() { }

  ngOnInit() {

  }
}
