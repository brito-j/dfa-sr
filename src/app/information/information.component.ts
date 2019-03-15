import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
