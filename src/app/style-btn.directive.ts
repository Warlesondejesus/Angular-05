import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyleBtn]'
})
export class StyleBtnDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    
  ) {
   
  }

  @HostListener('click', ['$event'])
  Del(evento: any): void {
    alert('Você deseja deletar esta tarefa?')
    console.log(evento)
  }

}
