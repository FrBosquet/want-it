import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import jsonp from 'jsonp';
import { environment } from '../../environments/environment';

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
      console.log(`${environment.apiEndpoint}${query}`);
      return this.http.get(`${environment.apiEndpoint}${query}`, this.options)
      .map((res:Response) => res.json());

    }

    delete( query: String) {
      // console.log(`${environment.apiEndpoint}${query}`);
      return this.http.delete(`${environment.apiEndpoint}${query}`, this.options)
      .map((res:Response) => res.json());

    }

    post( query: String, data: Object) {
      return this.http.post(`${environment.apiEndpoint}${query}`, data, this.options)
        .map((res:Response) => res.json());
    }

    put( query: String, data: Object) {
      return this.http.put(`${environment.apiEndpoint}${query}`, data, this.options)
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
