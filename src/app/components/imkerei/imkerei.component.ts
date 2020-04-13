import { Component, OnInit } from '@angular/core';
import { ImageUrlService } from 'app/services/imageUrl.service';

@Component({
  selector: 'app-imkerei',
  templateUrl: './imkerei.component.html',
  styleUrls: ['./imkerei.component.scss'],
  providers: [
    ImageUrlService
  ]
})
export class ImkereiComponent implements OnInit {
    simpleSlider = 40;
    doubleSlider = [20, 60];
    state_default: boolean = true;
    focus: any;

    constructor(
      private imageUrlService: ImageUrlService
    ) { }

    ngOnInit() {
      this.setImage('armin')
    }

    setImage(filename) {
      this.imageUrlService.getImageUrl(filename)
        .then(function(res) {
            document.getElementById(filename).setAttribute('src', res);
        })
        .catch(function(rej) {
            console.log(rej)
        });
    }

}
