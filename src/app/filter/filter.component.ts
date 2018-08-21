import { Component, OnInit } from '@angular/core';
import { filterData } from '../mock-data';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  filterData: any = filterData;

  constructor() {}

  ngOnInit() {}
}
