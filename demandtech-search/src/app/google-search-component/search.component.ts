import { HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { SearchService} from 'src/app/services/search.service';

@Component({
  selector: 'app-google-search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  public val: string;
  searchList = [];
  public query: string;
  

  
  url = "http://localhost:9090/doSign";
  urlPost = "http://localhost:9090/search";

  constructor(
    private googleSearchService: SearchService
  ) { 

  }

  ngOnInit(): void {
    console.log('In ngOnInit of GoogleSearchComponentComponent !!!');
    this.val = '';
    //this.searchList = [];

    //this.search('xx');
    
  }

  public search(value: string){
    //this.val += value;
    
    this.googleSearchService.onSearch(value)
    .subscribe( (d: any[]) => {
      
      this.searchList = d;

    });

  }

  public onSearchPost(query: string){
    //this.val += query;

    console.log('input query:' + query)

    this.googleSearchService.onSearchPost(query).subscribe( (d: any[]) => {
      console.log('d:' + d);
      console.log('after search call');

      this.searchList = d;

    });

    //console.log('searchList:' + searchList);

    //if(this.searchList.length == 0)
  }

}
