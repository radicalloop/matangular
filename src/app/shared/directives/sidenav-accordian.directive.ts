import { Directive, ElementRef, Input, Output, HostBinding, HostListener, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as $ from 'jquery';

@Directive({
  selector: '[sidenavAccordian]'
})
export class SidenavAccordionDirective implements OnInit {

  constructor(private el: ElementRef) { }

  @HostListener('click',  ['$event']) click = (event) => this.onClick(event);

  ngOnInit() {
  }

  onClick(event) {
    if ($(event.target).parents('.sub-menu').length == 0) {
      $('.menulist').find('.open').not($(this.el.nativeElement)).removeClass('open');
      $(this.el.nativeElement).toggleClass('open');
    }
  }
}