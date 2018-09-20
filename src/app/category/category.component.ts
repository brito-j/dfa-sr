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

  //currently selected category
  selection = '';

  //search input
  search = '';

  //filters categories based on search input
  filter() {
    return this.categories.filter(c => c.toLowerCase().includes(this.search.toLowerCase()));
  }

  //styles card to indicate current selection
  select(c) {
    //resets any styling
    for (let i = 0; i < this.filter().length; i++) {
      document.getElementById(this.filter()[i]).style.boxShadow = '0 .125rem 0 0 #d7d7d7';
      document.getElementById(this.filter()[i]).style.border = '1px solid #d7d7d7';
    }
    //sets current selection
    this.selection = c;
    //styles current selection card
    document.getElementById(c).style.boxShadow = '0 .125rem 0 0 #0094d2';
    document.getElementById(c).style.border = '1px solid #0094d2';
  }
}
