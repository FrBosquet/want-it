import { Component, OnInit, Output, EventEmitter, NgZone } from '@angular/core';
import { RequestService } from '../services/request.service';
import { Http, Response } from '@angular/http';

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
  brandUrl: string;

  wikiTitle: string = "This is a wikipedia search!";
  wikiDesc: string = "You could find some nice reference here";
  wikiSugestion: string[];
  wikiDescriptions: string[];

  constructor(private request: RequestService, private zone:NgZone, private http:Http) { }

  ngOnInit() {
  }

  wikiRef(){
    this.wikiTitle = "Searching...";
    this.request.wiki(this.shortName, (err, data)=>{
      this.nonsuggested = undefined;
      this.wikiSugestion = data[1];
      this.wikiDescriptions = data[2];
      if(this.wikiSugestion.indexOf(this.shortName) === -1){
        this.nonsuggested = this.shortName;
        this.pickSuggestion(-1, false);
      }else{
        this.pickSuggestion(0, false);
      }

      this.zone.run(()=>true);
    });
  }

  pickSuggestion(idx, auto){
    if(idx === -1){
      this.shortName = this.nonsuggested;
      this.longName = "";
      this.wikiTitle = this.nonsuggested;
      this.wikiDesc = "This brand did not exist in wikipedia ¿Are you shure its spelled like that? In that case, its ok to create this brand. You are too trendy for wikipedia!"
      return;
    }

    let reg = new RegExp('refer','i');

    if(reg.test(this.wikiSugestion[idx])){
      this.pickSuggestion(idx+1, auto);
    }else{
      this.wikiTitle = this.wikiSugestion[idx];
      if(auto) this.shortName = this.wikiTitle;
      this.wikiDesc = this.wikiDescriptions[idx];
      const prob = this.wikiDesc.substring(0, this.wikiDesc.indexOf('is')-1);
      if(auto) this.longName = prob;
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
              country: this.country,
              logoURI: this.brandUrl
            })
            .subscribe(res=>{
              let path = `/photo/save`;
              this.request.post(path,{id: this.brandUrl})
                .subscribe(saveRes=>{
                  console.log('saved the earth', res);
                  this.onFinish.emit({brand:res.brand});
                  this.onClickOutside.emit();
                });
            });
          }
        }
      )
  }

  photoChange(uri){
    this.brandUrl = uri;
  }

  hideBrandModal(){
    this.onClickOutside.emit();
  }
}
