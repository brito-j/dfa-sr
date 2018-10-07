// Jason Brito
// 9.20.2018
// The purpose of this component is to handle the category selection.

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  //all possible categories
  categories = [
    'Common Area',
    'Doors/Windows/Blinds/Walls',
    'Elevators',
    'Furniture/Appliances',
    'Heat/Air',
    'Housekeeping',
    'Lights/Electrical',
    'Other',
    'Pests',
    'Plumbing/Water'
  ];

  //search input
  search = '';

  //filters categories based on search input
  filter() {
    return this.categories.filter(c => c.toLowerCase().includes(this.search.toLowerCase()));
  }

  // Function that bolds matching letters
  bold(c) { return c.replace(new RegExp(this.search, 'gi'), '<b>' + '$&' + '</b>'); }

  // Function to obtain location option from click
  onClick(location) { return this.search = location; }
}
