import { Component, OnInit, Input, Output, EventEmitter, NgZone } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-new-edition-modal',
  templateUrl: './new-edition-modal.component.html',
  styleUrls: ['./new-edition-modal.component.scss']
})
export class NewEditionModalComponent implements OnInit {
  @Output() onClickOutside = new EventEmitter();
  @Output() onFinish = new EventEmitter();
  @Input() productId;

  name: string;
  ref: string;
  specs:  string = '';

  specArray: string[];

  constructor(private request: RequestService, private zone:NgZone) { }

  ngOnInit() {
  }

  updateSpecs(event){
    const reg = /([A-Za-z ]+:[0-9A-Za-z \._\-\+]+)/i //new RegExp('([A-Za-z ]+:[A-Za-z \._\-\+]+)','i');
    this.specArray =
      this.specs
        .split(',')
        .map( e => e.replace(/^\s+|\s+$/g, ''))
        .filter(e => e !== '' && reg.test(e))
        .map( e => [e[0].toUpperCase(),e.slice(1).toLowerCase()].join(''));
    console.log(this.specArray);
  }

  createEdition(){
    console.log(this.name, this.ref, this.specArray, this.productId);
    if(!this.name || !this.specArray || this.specArray.length === 0) return;
    if(!this.ref) this.ref = this.name.toLowerCase();

    const features = this.specArray.map(s => {
      let split = s.split(':');
      return {
        spec: split[0],
        value: split[1]
      }
    })

    console.log(features)

    this.request.post('/edition/name', {name:this.name, productId: this.productId})
      .subscribe(res => {
        if( res.edition.length !== 0){
          console.log("This edition already exists");
          this.onFinish.emit({name: this.name});
          this.onClickOutside.emit();
          return;
        }

        this.request.post('/edition/create', {
          productId: this.productId,
          name: this.name,
          ref: this.ref,
          features: features
        }).subscribe(res => {
          this.onFinish.emit({edition:res.edition});
          this.onClickOutside.emit();
        })
      });
  }

  hideEditionModal(){
    this.onClickOutside.emit();
  }
}
