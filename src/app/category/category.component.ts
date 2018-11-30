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

  pc: object = {
    'ACCESSIBILITY' : 'ACCESSIBILITY ISSUES',
    'BIOWASTE' : 'BIOWASTE PICKUP REQUEST',
    'CARP-SPECIAL' : 'CARPENTRY SPECIAL REQUEST',
    'CARPENTRY' : 'CARPENTRY REPAIR',
    'COG' : 'COGENERATION PLANT REQUEST',
    'CONTROLS' : 'CONTROLS REQUEST',
    'CUST-CALL BACK' : 'CUSTODIAL CALL BACK PART OF NORMAL ROUTINES BUT MISSED',
    'CUST-SPECIAL' : 'CUSTODIAL SPECIAL REQUEST PAID FOR BY CUSTOMER NOT COVERED BY ROUTINES',
    'CUSTODIAL' : '	CUSTODIAL REQUEST ITEMS NOT IN NORMAL ROUTINE BUT PART OF MAINTENANCE',
    'CWD' : 'CHILLED WATER GROUP REQUEST',
    'ELECTRICAL' : 'ELECTRICAL REQUEST',
    'ELEVATOR' : 'ELEVATOR REQUEST',
    'EVENT' : 'EVENT REQUEST',
    'FIRE_LIFE_SAFE' : 'FIRE LIFE SAFETY',
    'GROUNDS' : 'GROUNDS REPAIR',
    'GROUNDS-SPECIAL' : 'GROUNDS SPECIAL REQUEST',
    'HVAC' : 'HVAC REQUEST',
    'HVAC -SPEC_EQPT' : 'HVAC SPECIAL REQUEST - SPECIAL EQUIPMENT REPAIR',
    'INTEROFFICEMOVE' : 'INTEROFFICE MOVE',
    'KEY/SIGN' : 'KEY/SIGN REQUEST',
    'MOVE' : 'DO NOT USE MOVE REQUEST',
    'NEWKEY' : 'MAKE NEW KEYS',
    'PAINT' : 'PAINT CREW REQUEST',
    'PAINT-SPECIAL' : 'PAINT SPECIAL REQUEST',
    'PEST CONTROL' : 'PEST CONTROL REQUEST',
    'PLUMBING' : 'PLUMBING REQUEST',
    'RECYCLING' : 'RECYCLING REQUEST',
    'SURPLUS' : 'SURPLUS PICKUP REQUEST'
  };

  //problem codes
  codes: string[] = Object.keys(this.pc);

  //problem code
  search: string = '';

  //description
  description: string = this.getDescription(this.search);

  //filters problem codes based on search
  filter() { return this.codes.filter(c => c.toLowerCase().includes(this.search.toLowerCase())); }

  //bolds matching letters
  bold(c: string) { return c.replace(new RegExp(this.search,'gi'),'<b>' + '$&' + '</b>'); }

  //sets the selected category
  onClick(category: string) : string { return this.search = category; }

  //gets the corresponding description of the searched problem code
  getDescription(codeKey: string) : string { return !this.search.length ? '' : this.pc[codeKey]; }
}
