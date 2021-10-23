import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchBean } from './SearchBean';
import { SearchBeanWrapper } from './SearchBeanWrapper';

@Injectable({
  providedIn: 'root'
})
export class SearchWithPagiService {
  public baseUrl: string = "http://agw.dev.search.acoustic.com/api/";

  url = "http://localhost:8077/acoustic-search/search-with-get";
  urlPost = "http://localhost:8077/acoustic-search/search-with-post";
  //urlPost1 = this.baseUrl + "search/search-with-paging";
  urlPost1 = environment.apiUrl + "search/search-with-paging";

  router: Router;
  public searchList = [];
  httpClient: HttpClient;
  bean: SearchBean[];

  constructor(private http: HttpClient) { 
    this.httpClient = http;
  }

  searchWithPagi(val: String): Observable<SearchBean[]> {

    console.log('inside searchWithPagi');

    console.log('inside string:' + val);

    return this.httpClient.post<SearchBean[]>(this.urlPost, { "name": val});

  }

  searchWithServerPagi(val: String, pageSize: number, pageIndex: number): Observable<SearchBeanWrapper> {

    console.log('inside searchWithServerPagi');

    console.log('inside string:' + val);

    return this.httpClient.post<SearchBeanWrapper>(this.urlPost1, { "q": val, "limit": 10, "pageSize": pageSize, "pageNumber": pageIndex});

  }

}
