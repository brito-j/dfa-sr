import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  // Location list of Vanderbilt buildings
  buildings = [
    'Alpha Chi Omega',
    'Alpha Delta Pi',
    'Alpha Epsilon Pi',
    'Alpha Omicron Pi',
    'Alpha Tau Omega',
    'Blakemore House',
    'Branscomb',
    'Carmichael Towers I',
    'Carmichael Towers II',
    'Carmichael Towers III',
    'Carmichael Towers IV',
    'Chaffin Place',
    'Chi Omega',
    'Cole Hall',
    'Crawford House',
    'Delta Delta Delta',
    'Delta Kappa Epsilon',
    'Delta Tau Delta',
    'E. Bronson Ingram College',
    'East House',
    'Gillette House',
    'Hank Ingram House',
    'Kappa Alpha',
    'Kappa Alpha Theta',
    'Kappa Delta',
    'Kappa Kappa Gamma',
    'Kappa Sigma',
    'Lambda Chi Alpha',
    'Lambda Theta Phi',
    'Lewis House',
    'Living with Family',
    'Lupton House',
    'Mayfield Place',
    'McGill Hall',
    'McTyeire Hall',
    'Memorial House',
    'Moore College',
    'Morgan House',
    'Murray House',
    'NPHC Community House',
    'NPHC Fraternity House',
    'NPHC Sorority House',
    'North House',
    'Off Campus',
    'Phi Delta Theta',
    'Phi Gamma Delta',
    'Phi Kappa Psi',
    'Phi Kappa Sigma',
    'Pi Beta Phi',
    'Scales House',
    'Sigma Alpha Epsilon',
    'Sigma Chi',
    'Sigma Nu',
    'Stambaugh House',
    'Stapleton House',
    'Sutherland House',
    'Tolman Hall',
    'Unassigned',
    'Vaughn House',
    'Warren College',
    'West House',
    'Zeta Beta Tau',
    'Zeta Tau Alpha'
  ];

  // For building search
  search = '';

  // For floor select
  floors = '';

  // For room select
  rooms = '';

  constructor() {}

  ngOnInit() {}

  // Filter function that matches letters within search to provided options
  filter(list) {
    return list.filter(c => c.toLowerCase().includes(this.search.toLowerCase()));
  }

  // Function that bolds matching letters
  bold(c) { return c.replace(new RegExp(this.search, 'gi'), '<b>' + '$&' + '</b>'); }

  // Function to obtain location option from click
  onClick(location) { return this.search = location; }

}
