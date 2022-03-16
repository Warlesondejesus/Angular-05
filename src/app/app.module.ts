import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { InptComponent } from './inpt/inpt.component';
import { StyleBtnDirective } from './style-btn.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InptComponent,
    StyleBtnDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
