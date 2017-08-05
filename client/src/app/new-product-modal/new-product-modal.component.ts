import { Component, OnInit, Output, EventEmitter, NgZone } from '@angular/core';
import { RequestService } from '../services/request.service';


@Component({
  selector: 'app-new-product-modal',
  templateUrl: './new-product-modal.component.html',
  styleUrls: ['./new-product-modal.component.scss']
})
export class NewProductModalComponent implements OnInit {
  @Output() onClickOutside = new EventEmitter();
  @Output() onFinish = new EventEmitter();

  shortName: string;
  longName: string;
  country:  string;

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
      this.wikiSugestion = data[1];
      this.wikiDescriptions = data[2];
      console.log("wikisug",this.wikiSugestion);
      this.pickSuggestion(0);
      this.zone.run(()=>true);
    });
  }

  pickSuggestion(idx){
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

    this.request.post('/product/name',{term: this.shortName})
      .subscribe(res =>{
          if(res.products.length != 0){
            console.log('This product already exists!');
            this.onFinish.emit({name: this.shortName});
            this.onClickOutside.emit();
          }else{
            this.request.post('/product/create',{
              name: this.shortName,
              fullName: this.longName,
              country: this.country
            })
            .subscribe(res=>{
              this.onFinish.emit({product:res.product});
              this.onClickOutside.emit();
            });
          }
        }
      )
  }

  hideProductModal(){
    this.onClickOutside.emit();
  }
}
