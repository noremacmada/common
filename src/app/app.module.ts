import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { FeedbackInputComponent } from './feedback-input/feedback-input.component';



@NgModule({
  declarations: [
    AppComponent,
    PopUpComponent,
    FeedbackInputComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
