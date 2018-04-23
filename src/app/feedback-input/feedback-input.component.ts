import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'feedback-input',
  templateUrl: './feedback-input.component.html',
  styleUrls: ['./feedback-input.component.css']
})
export class FeedbackInputComponent implements OnInit {

  @Output() blur: EventEmitter<any> = new EventEmitter<any>();

  private _value: any;
  @Output() valueChange : EventEmitter<any> = new EventEmitter<any>();
  @Input() set value(value: any) {
    if(this.value != value){
      this._value = value;
      this.valueChange.emit(this._value);
    }
  }
  get value() :any {
    return this._value;
  }

  @Input() message;
  @Input() type;
  @Input() name;
  @Input() placeholder;
  @Input() glyphicon;
  @Input() label;

  private _status: string;
  get status(): string {return this._status;}
  @Input('status')
  set status(level: string) {
    this._status = level;
    this.setFeedbackClasses();
  }

  isAlertVisible: boolean;
  feedback: string;
  feedbackIcon: string;
  alert: string;

  constructor() { }

  ngOnInit() {}

  onBlur(): void {
    this.isAlertVisible = true;
    this.blur.emit();
  }


  alertDismissClick(): void {
    this.isAlertVisible = false;
  }

  setFeedbackClasses():void {
    switch(this._status){
      case "error":
        this.feedback = "has-error";
        this.feedbackIcon = "exclamation-triangle";
        this.alert = "danger";
        break;
      case "warning":
        this.feedback = "has-warning";
        this.feedbackIcon = "minus-square";
        this.alert = "warning";
        break;
      case "success":
        this.feedback = "has-success";
        this.feedbackIcon = "plus-square";
        this.alert = "success";
        break;
      case "default":
      default:
        this.feedback = "has-default";
        this.feedbackIcon = "font-awesome";
        this.alert = "alert-info";
        this.message = "";
        break;
    }
  }
}
