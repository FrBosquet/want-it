import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class RequestService {
    options:object = {withCredentials:true};

    constructor( private http:Http ) { }

    get( query: String) {
      return this.http.get(`http://localhost:3000${query}`, this.options)
      .map((res:Response) => res.json());

    }

    post( query: String, data: Object) {
      return this.http.post(`http://localhost:3000${query}`, data, this.options)
        .map((res:Response) => res.json());
    }
}
