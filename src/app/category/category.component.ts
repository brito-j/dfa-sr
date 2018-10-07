// Jason Brito
// 9.28.2018
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

<<<<<<< HEAD
  // Function that bolds matching letters
  bold(c) { return c.replace(new RegExp(this.search, 'gi'), '<b>' + '$&' + '</b>'); }

  // Function to obtain location option from click
  onClick(location) { return this.search = location; }
=======
  //bolds the letters of the category options from the input search
  bold(c) { return c.replace(new RegExp(this.search, 'gi'), '<b>' + '$&' + '</b>'); }

  //sets the dropdown button label to the currently selected category
  setSelection() { return this.selection.length ? this.selection : 'Category'; }
>>>>>>> 83911b2b3d530ad5e5cd51cdae782afd294aeda3
}
