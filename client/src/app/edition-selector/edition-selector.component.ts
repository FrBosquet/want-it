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
  @Input() productId: string;
  @Input() editionModal: boolean;
  @Output() onSelectEdition = new EventEmitter();

  editionName: string;
  maxVisibleEditions: number = 9;

  constructor(private request: RequestService) { }

  showEditionModal(event){
    console.log("Show modal")
    this.editionModal = true;
  }

  hideEditionModal(event){

    this.editionModal = false;
  }

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

  newEdition(event: Object){
    console.log("Received",event);
    if(event['name']){
      console.log('This edition exist');
      this.editionName = event['name'];
      this.change(event['name']);
    }else{
      this.editionList.push(event['edition']);
      this.editionName = event['edition']['name'];
      this.change(event['edition']['name']);
    }
  }
}
