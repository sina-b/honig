import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageUrlService {

  constructor(
    public storage: AngularFireStorage
  ) { }

 getImageUrl(filename): Promise<string> {
    var storageRef = this.storage.ref(`assets/img/${filename}.jpg`);
    return storageRef.getDownloadURL().toPromise()
      .then(function(url: string) {
        return url
      })
      .catch(function(error) {
      return error
      } 
    );
  }
}
