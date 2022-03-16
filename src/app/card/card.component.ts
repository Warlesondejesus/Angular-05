import { Component, } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {

  constructor(private _snackBar: MatSnackBar) {}

  tExcluida():void {
    this._snackBar.open('ToDo List vazio!', 'Fechar!',);
  }
}
