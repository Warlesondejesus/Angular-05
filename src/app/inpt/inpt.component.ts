import { Component, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-inpt',
  templateUrl: './inpt.component.html',
  styleUrls: ['./inpt.component.css']
})
export class InptComponent  {

  tarefas: Array<string> = []
  incremento: number = 0
  excluir: boolean = true

  @ViewChild('inputTarefa')
  ipt!: ElementRef

  add(valor: string): void {
    this.tarefas.push(valor)
    this.ipt.nativeElement.value = ''
  }

  incr(event:any):number {
    this.incremento ++

    return this.incremento
  }
  
 
  remover(z: string):void{
  this.tarefas.splice(this.tarefas.indexOf(z),1)
}

  removerall(): void {
  this.tarefas.length = 0
}

}
