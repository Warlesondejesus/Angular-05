import { Component, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-inpt',
  templateUrl: './inpt.component.html',
  styleUrls: ['./inpt.component.css']
})
export class InptComponent  {

  tarefas: Array<string> = []

  @ViewChild('inputTarefa')
  ipt!: ElementRef

  add(valor: string): void {
    this.tarefas.push(valor)
    this.ipt.nativeElement.value = ''
  }
  
}
