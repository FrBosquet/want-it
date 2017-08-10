import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../environments/environment';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-edition-card',
  templateUrl: './edition-card.component.html',
  styleUrls: ['./edition-card.component.scss']
})
export class EditionCardComponent implements OnInit {
  @Input() edition;
  photoURI: string;
  constructor(private request: RequestService) { }

  ngOnInit() {
    if(this.edition['productId']){
      this.request.get(`/post/edition/one/${this.edition['_id']}`)
      .subscribe(res => {

        this.photoURI = `url(${environment.apiEndpoint}/images/${res.post ? res.post.photoURI : 'default'})`;
      });

    }else{
      this.photoURI = `url(${environment.apiEndpoint}/images/default)`;

    }
  }

}
