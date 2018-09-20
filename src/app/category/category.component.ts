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

  category = '';

  search = '';

  filter() {
    return this.categories.filter(c => c.toLowerCase().includes(this.search.toLowerCase()));
  }

  bold(c) { return c.replace(new RegExp(this.search, 'gi'), "<b>" + "$&" + "</b>"); }

}
