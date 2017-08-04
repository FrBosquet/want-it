import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-brand-modal',
  templateUrl: './new-brand-modal.component.html',
  styleUrls: ['./new-brand-modal.component.scss']
})
export class NewBrandModalComponent implements OnInit {
  @Output() onClickOutside = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  hideBrandModal(){
    console.log("emiting");
    this.onClickOutside.emit();
  }
}
