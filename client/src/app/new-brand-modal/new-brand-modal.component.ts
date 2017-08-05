import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RequestService } from '../services/request.service';


@Component({
  selector: 'app-new-brand-modal',
  templateUrl: './new-brand-modal.component.html',
  styleUrls: ['./new-brand-modal.component.scss']
})
export class NewBrandModalComponent implements OnInit {
  @Output() onClickOutside = new EventEmitter();

  shortName: string;
  longName: string;
  country:string;

  wikiTitle: string = "This is a wikipedia search!";
  wikiDesc: string = "You could find some nice reference here";
  wikiSugestion: string[];
  wikiDescriptions: string[];

  constructor(private request: RequestService) { }

  ngOnInit() {
  }

  wikiRef(){
    this.wikiTitle = "Searching...";
    this.request.wiki(this.shortName, (err, data)=>{
      console.log(data);
      this.wikiSugestion = data[1];
      this.wikiDescriptions = data[2];
      this.pickSuggestion(0);
    });
  }

  pickSuggestion(idx){
    console.log(idx);
    let reg = new RegExp('may refer to','i');
    if(reg.test(this.wikiSugestion[idx])){
      this.pickSuggestion(idx+1);
    }else{
      this.wikiTitle = this.wikiSugestion[idx];
      this.wikiDesc = this.wikiDescriptions[idx];
    }
  }

  createBrand(){
    console.log(this.shortName, this.longName, this.country);

    if(this.shortName){
      
    }

  }

  hideBrandModal(){
    console.log("emiting");
    this.onClickOutside.emit();
  }
}
