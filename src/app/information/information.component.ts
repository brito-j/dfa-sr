import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  first;
  last;
  id;
  email;
  phone1;
  dept;
  altfirst;
  altlast;
  altemail;
  alternatephone;


}
