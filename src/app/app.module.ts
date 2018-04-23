import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { FeedbackInputComponent } from './feedback-input/feedback-input.component';
import { FontAwesomeFreeIconListComponent } from './font-awesome-free-icon-list/font-awesome-free-icon-list.component';



@NgModule({
  declarations: [
    AppComponent,
    PopUpComponent,
    FeedbackInputComponent,
    FontAwesomeFreeIconListComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
