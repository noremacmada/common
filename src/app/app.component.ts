import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  titleCopy;
  onOpen(){
    this.titleCopy = this.title;
  }
  onSave(){
    this.title = this.titleCopy;
  }
  feedbackInputValue: string;
  feedbackInputStatus : string = 'initStatus';
  feedbackInputMessage : string = 'initMessage';
  valueFeedbackStatusMappings : object = {
    'valueError':'error',
    'valueWarning':'warning',
    'valueSuccess':'success',
    'valueDefault':'default'
  }
  onFeedbackInputBlur(value){
    this.feedbackInputStatus = this.valueFeedbackStatusMappings[value];
    this.feedbackInputMessage = this.feedbackInputStatus
    if(!this.feedbackInputStatus){
      this.feedbackInputStatus = 'error';
      this.feedbackInputMessage = this.feedbackInputStatus + "Message";
    }
  }
}
