import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-brand-card',
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.scss']
})
export class BrandCardComponent implements OnInit {
  @Input() brand;
  photoURI: string;
  constructor() { }

  ngOnInit() {
    console.log(this.brand);
    this.photoURI = `url(${environment.apiEndpoint}/images/${this.brand.logoURI || 'default'})`;
  }

}
