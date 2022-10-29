import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit {

  htmlElement:ElementRef<HTMLElement>;
  
  _color:string = '';
  _mensaje:string = '';

  @Input() set color(color:string){

    this.htmlElement.nativeElement.style.color = color;
    this._color = color;
  } 

  
  @Input() set mensaje(texto:string){
    this.htmlElement.nativeElement.innerText= texto;
    this._mensaje = texto;
  }

  
  constructor(private el:ElementRef<HTMLElement>) { 
    this.htmlElement = el;
   
  }
 
  ngOnInit(): void {
    if(this._color===''){
      this.htmlElement.nativeElement.style.color = 'red';
    }
    if(this._mensaje===''){
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido';
    }
  }

}
