import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchBean } from './SearchBean';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url = "http://localhost:8077/acoustic-search/search-with-get";
  urlPost = "http://localhost:8077/acoustic-search/search-with-post";

  router: Router;
  public searchList = [];
  httpClient: HttpClient;
  bean: SearchBean;
  //private params1: HttpParams;

  constructor(
    private http: HttpClient
  ) {  
    this.httpClient = http;
   }

   ngOnInit(): void {
    console.log('In ngOnInit of SearchService !!!');

 
  }

  onSearch(val: string): Observable<any[]> {

    console.log('inside onSearch');

    //this.searchList = ['abc', 'xyz'];

    const params = new HttpParams()
    .set('q', val);

    
     return this.httpClient.get<any[]>(this.url, {'params': params});

    //return this.searchList;
  }

  onSearchPost(val: String): Observable<any[]> {

    console.log('inside onSearchPost');

    console.log('inside string:' + val);

    return this.httpClient.post<any[]>(this.urlPost, { "name": val});

    //return this.searchList;
  }
}
