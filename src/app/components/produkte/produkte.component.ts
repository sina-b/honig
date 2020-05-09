import { Component, OnInit } from '@angular/core';
import { ImageUrlService } from 'app/services/imageUrl.service';

@Component({
  selector: 'app-produkte',
  templateUrl: './produkte.component.html',
  styleUrls: ['./produkte.component.scss']
})
export class ProdukteComponent implements OnInit {

  constructor(
    private imageUrlService: ImageUrlService
  ) { }

  ngOnInit() {
    this.setImage('sommer_fluessig')
    this.setImage('sommer_cremig')
    this.setImage('fruehling_fluessig')
    this.setImage('fruehling_cremig')
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
