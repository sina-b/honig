import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  constructor(
    public firestore: AngularFirestore
  ) { }
  pauseOnHover = true;

  assets_januar = this.loadAssetList('januar')
  assets_februar = this.loadAssetList('februar')
  assets_maerz = this.loadAssetList('maerz')
  assets_april = this.loadAssetList('april')
  assets_mai = this.loadAssetList('mai')
  assets_juni = this.loadAssetList('juni')
  assets_juli = this.loadAssetList('juli')
  assets_august = this.loadAssetList('august')
  assets_september = this.loadAssetList('september')
  assets_oktober = this.loadAssetList('oktober')
  assets_november = this.loadAssetList('november')
  assets_dezember = this.loadAssetList('dezember')

  ngOnInit(): void {
    let active = 0;
    let buttons = document.getElementsByClassName('carousel-btn');
    let carousels = document.getElementsByClassName('page-carousel');

    Array.from(buttons).forEach(function (button) {
      button.addEventListener('click', function() {
        carousels[active].classList.add('ghost');
        active = Number(button.id);
        carousels[active].classList.remove('ghost');
        });
    });
  }

  loadAssetList(month) {
    let assetList = []
    this.firestore.collection(month).get().toPromise().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          assetList.push([doc.data().img, doc.data().text])
      });
    });
    return assetList
  }
}