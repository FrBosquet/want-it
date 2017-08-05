import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import jsonp from 'jsonp';

@Injectable()
export class RequestService {
    options:object = {
      withCredentials:true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    };

    constructor( private http:Http ) { }

    get( query: String) {
      return this.http.get(`http://localhost:3000${query}`, this.options)
      .map((res:Response) => res.json());

    }

    post( query: String, data: Object) {
      return this.http.post(`http://localhost:3000${query}`, data, this.options)
        .map((res:Response) => res.json());
    }

    wiki( query: String, callback: Function){
      let urlQuery = query.split(' ').join('+');
      let url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${urlQuery}&format=json`;
      jsonp(url,
        null,
        callback);
  }
}
