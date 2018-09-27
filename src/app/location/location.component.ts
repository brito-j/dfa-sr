import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  locations = [
    'Hank Ingram',
    'Gillette',
    'North House',
    'West House',
    'East House',
    'Murray',
    'Stambaugh',
    'Kissam',
    'Lewis',
    'Morgan',
    'Mayfield A',
    'Mayfield B',
    'Mayfield C',
    'Mayfield D',
    'Towers I',
    'Towers II',
    'Towers III',
    'Towers IV',
    'McGill',
    'Branscomb',
    'E. Bronson Ingram'
  ];

  search = '';
  @Input() input;

  constructor() {}

  ngOnInit() {}

  filter() {
    return this.locations.filter(c => c.toLowerCase().includes(this.search.toLowerCase()));
  }

  bold(c) { return c.replace(new RegExp(this.search, 'gi'), '<b>' + '$&' + '</b>'); }

  onClick(location) { return this.search = location; }

}
