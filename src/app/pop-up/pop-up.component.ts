import { Component, TemplateRef, Input, EventEmitter } from '@angular/core';
import { OnInit, AfterViewInit, ContentChild, ContentChildren, QueryList, ElementRef, Output} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'pop-up',
  templateUrl: './pop-up.component.html'
})
export class PopUpComponent implements OnInit, AfterViewInit {
  @Input() title;
  @Output() onBeforeShow = new EventEmitter();
  @Output() onSaveAfterHide = new EventEmitter();
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  open(template: TemplateRef<any>): void {
    this.onBeforeShow.emit();
    this.modalRef = this.modalService.show(template);
  }
  public save(): void {
    this.close();
    this.onSaveAfterHide.emit();
  }
  public close(): void {
    this.modalRef.hide()
  }

  ngAfterViewInit(): void{}
  ngOnInit(): void {}


}
