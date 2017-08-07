import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-state-selector',
  templateUrl: './state-selector.component.html',
  styleUrls: ['./state-selector.component.scss']
})
export class StateSelectorComponent implements OnInit {
  @Output() onStateChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() state;

  constructor() { }

  ngOnInit() {
  }

  setState(value){
    this.onStateChange.emit(value);
  }

}
