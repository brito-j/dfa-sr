// Jason Brito
// 10.28.2018
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

  //problem codes
  codes = [
    'Accessibility',
    'Biowaste',
    'Carpentry',
    'Carp-Special',
    'COG',
    'Controls',
    'CPS Support',
    'Cust-Call Back',
    'Cust-Special',
    'Custodial',
    'CWD',
    'Electrical',
    'Elevator',
    'Event',
    'Fire Life Safe',
    'Fire Marshall',
    'Grounds',
    'Grounds-Special',
    'HVAC',
    'HVAC-Spec_Eqpt',
    'Interofficemove',
    'Key/Sign',
    'Paint',
    'Paint-Special',
    'Pest Control',
    'Plumbing',
    'Projects',
    'Recycling',
    'Space',
    'Surplus',
    'Systems'
  ];

  //problem code
  search = '';

  //description
  description = '';

  //filters problem codes based on search
  filter() {
    return this.codes.filter(c => c.toLowerCase().includes(this.search.toLowerCase()));
  }

  //bolds matching letters
  bold(c) { return c.replace(new RegExp(this.search, 'gi'), '<b>' + '$&' + '</b>'); }

  //sets category on click
  onClick(category) { return this.search = category; }

}
