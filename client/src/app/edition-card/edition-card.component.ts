import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edition-card',
  templateUrl: './edition-card.component.html',
  styleUrls: ['./edition-card.component.scss']
})
export class EditionCardComponent implements OnInit {
  @Input() edition;
  constructor() { }

  ngOnInit() {
  }

}
