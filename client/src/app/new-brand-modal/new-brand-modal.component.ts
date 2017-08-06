import { Component, OnInit, Output, EventEmitter, NgZone } from '@angular/core';
import { RequestService } from '../services/request.service';


@Component({
  selector: 'app-new-brand-modal',
  templateUrl: './new-brand-modal.component.html',
  styleUrls: ['./new-brand-modal.component.scss']
})
export class NewBrandModalComponent implements OnInit {
  @Output() onClickOutside = new EventEmitter();
  @Output() onFinish = new EventEmitter();

  shortName: string;
  longName: string;
  country:  string;
  nonsuggested: string;

  wikiTitle: string = "This is a wikipedia search!";
  wikiDesc: string = "You could find some nice reference here";
  wikiSugestion: string[];
  wikiDescriptions: string[];

  constructor(private request: RequestService, private zone:NgZone) { }

  ngOnInit() {
  }

  wikiRef(){
    this.wikiTitle = "Searching...";
    this.request.wiki(this.shortName, (err, data)=>{
      this.nonsuggested = undefined;
      this.wikiSugestion = data[1];
      this.wikiDescriptions = data[2];
      console.log("wikisug",this.wikiSugestion);

      //check if the exact match is in the wikiSugestion
      if(this.wikiSugestion.indexOf(this.shortName) === -1){
        this.nonsuggested = this.shortName;
        this.pickSuggestion(-1);
      }else{
        this.pickSuggestion(0);
      }

      this.zone.run(()=>true);
    });
  }

  pickSuggestion(idx){
    if(idx === -1){
      this.shortName = this.nonsuggested;
      this.longName = "";
      this.wikiTitle = this.nonsuggested;
      this.wikiDesc = "This brand did not exist in wikipedia ¿Are you shure its spelled like that? In that case, its ok to create this brand. You are too trendy for wikipedia!"
      return;
    }

    console.log(idx);
    let reg = new RegExp('refer','i');
    console.log(reg);
    console.log('pick',idx)
    if(reg.test(this.wikiSugestion[idx])){
      this.pickSuggestion(idx+1);
    }else{
      this.wikiTitle = this.wikiSugestion[idx];
      this.shortName = this.wikiTitle;
      this.wikiDesc = this.wikiDescriptions[idx];
      const prob = this.wikiDesc.substring(0, this.wikiDesc.indexOf('is')-1);
      this.longName = prob;
    }
  }

  createBrand(){
    if(!this.shortName || !this.country || !this.longName) return;

    this.request.post('/brand/name',{term: this.shortName})
      .subscribe(res =>{
          if(res.brands.length != 0){
            console.log('This brand already exists!');
            this.onFinish.emit({name: this.shortName});
            this.onClickOutside.emit();
          }else{
            this.request.post('/brand/create',{
              name: this.shortName,
              fullName: this.longName,
              country: this.country
            })
            .subscribe(res=>{
              this.onFinish.emit({brand:res.brand});
              this.onClickOutside.emit();
            });
          }
        }
      )
  }

  hideBrandModal(){
    this.onClickOutside.emit();
  }
}
