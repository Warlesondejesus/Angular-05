import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-inpt',
  templateUrl: './inpt.component.html',
  styleUrls: ['./inpt.component.css']
})
export class InptComponent {

  tarefas: Array<string> = []
  

  ngOnInit(): void {
    this.recuperarDLS()
  }

  @ViewChild('inputTarefa')
  ipt!: ElementRef

  add(valor: string): void {
    this.tarefas.push(valor)
    this.ipt.nativeElement.value = ''
    let arrStr = JSON.stringify(this.tarefas)
    localStorage.setItem('Dados array:', arrStr)
    this.recuperarDLS()

  }

  remover(z: string): void {
    this.tarefas.splice(this.tarefas.indexOf(z), 1)
    let arrStr = JSON.stringify(this.tarefas)
    localStorage.setItem('Dados array:', arrStr)
    this.recuperarDLS()
  }

  removerall(): void {
    this.tarefas.length = 0
    let arrStr = JSON.stringify(this.tarefas)
    localStorage.setItem('Dados array:', arrStr)
    this.recuperarDLS()
  }

  recuperarDLS(): void {
    let storage = localStorage.getItem('Dados array:')
    let arr = JSON.parse(storage || '[]')
    this.tarefas = arr

  }
}
