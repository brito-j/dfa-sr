// Jason Brito
// 9.15.2018
// The purpose of this service is to process the upload of an image.

import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() {
  }

  // data url generated by reading the image file as a data url
  url = '';

  // reads the image file and generates a corresponding data url
  upload(event) {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      this.url = reader.result;
    };
  }

}