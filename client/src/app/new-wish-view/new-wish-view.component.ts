import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-new-wish-view',
  templateUrl: './new-wish-view.component.html',
  styleUrls: ['./new-wish-view.component.scss']
})
export class NewWishViewComponent implements OnInit {
  selectedBrand:Object;
  pepito: string = 'Pepito';

  constructor(private zone: NgZone) {
    this.selectedBrand = undefined;
  }

  ngOnInit() {
  }

  selectBrand(brand:Object){
    console.log(this.zone);
    this.selectedBrand = brand;
    this.pepito =  'Juanito';
    console.log({brand, selectedbrand: this.selectedBrand});
  }
}
