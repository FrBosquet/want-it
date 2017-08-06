import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-edition-selector',
  templateUrl: './edition-selector.component.html',
  styleUrls: ['./edition-selector.component.scss']
})
export class EditionSelectorComponent {
  @Input() editionList: Object[];
  @Input() visibleEdition: Object[];
  @Input() editionModal: boolean;
  @Output() onSelectEdition = new EventEmitter();

  editionName: string;
  maxVisibleEditions: number = 9;

  constructor(private request: RequestService) { }

  change(event){
    this.visibleEdition = this.editionList
      .filter(elm =>{
        return (new RegExp(event, 'i')).test(elm['name']);
      })
      .slice(0,this.maxVisibleEditions)
      console.log(this.visibleEdition);
  }

  select(edition: Object){
    this.onSelectEdition.emit(edition);
  }
}
