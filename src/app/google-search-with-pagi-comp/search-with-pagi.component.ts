import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { SearchBean } from '../services/SearchBean';
import { UserData } from '../services/UserData';
import { SearchWithPagiService } from '../services/search-with-pagi.service';
import { SearchBeanWrapper } from '../services/SearchBeanWrapper';


@Component({
  selector: 'app-google-search-with-pagi-comp',
  templateUrl: './search-with-pagi.component.html',
  styleUrls: ['./search-with-pagi.component.css']
})
export class SearchWithPagiComponent implements OnInit {

  displayedColumns = ['id', 'name', 'company', 'status'];
  dataSource: MatTableDataSource<SearchBean>;
  searchInput: string;
  searchBean: SearchBean[];
  totalRecords: number;
  searchInput1: string;
  showPages: boolean;


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  
  constructor(private service: SearchWithPagiService) { 

    const s: SearchBean[] = [];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(s);

  }

  
  ngOnInit(): void {
    //this.searchInput = 'S';
    this.totalRecords = 0;
  }

  searchWithPagi(si: string){
    
    console.log('search input:' + si);
    console.log('@inside searchWithPagi');

    this.showPages = true;
    
    //this.searchInput = si;

    this.service.searchWithPagi(this.searchInput).subscribe( (d) => {
      console.log('d:' + d);
      console.log('after search call');
      this.dataSource.data = d;

    });

    //this.paginator.length = 10;
    //console.log(this.searchBean.length)
    //this.dataSource.data = this.searchBean;

    console.log('this.paginator.pageIndex:' + this.dataSource.paginator.pageIndex);
    console.log('this.paginator.pageSize:' + this.dataSource.paginator.pageSize);
    console.log('this.paginator.length:' + this.dataSource.paginator.length);

  }

  searchWithServerPagi(){
    console.log('search input:' + this.searchInput);
    console.log('@inside searchWithServerPagi');    
    //this.searchInput = si;
    this.showPages = true;

    this.service.searchWithServerPagi(this.searchInput, this.paginator.pageSize, this.paginator.pageIndex).subscribe( (d: SearchBeanWrapper) => {
      this.dataSource.data = d.searchResult;
      //this.dataSource.paginator.length = d.totalRecords;
      this.totalRecords = d.totalRecords;     

    });

    //this.totalRecords = 31;
    //this.dataSource.paginator.length = 31;
    console.log('this.totalRecords:' + this.totalRecords)
    //this.paginator.length = 10;
    //console.log('this.dataSource.paginator.length:' + this.dataSource.pagin)
  }

  
}
