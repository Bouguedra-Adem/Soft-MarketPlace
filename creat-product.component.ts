import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';


@Component({
  selector: 'app-creat-product',
  templateUrl: './creat-product.component.html',
  styleUrls: ['./creat-product.component.css']
})
export class CreatProductComponent implements OnInit {
  lien: any = '../assets/B.jpg';
    produit: DetailProduct = {
      Brief: {
        Date_added: null,
        Description_brief: null,
        Name: null,
        Price: {
          Etendu: null,
          Régulier: null,
          },
        Thumbnail: null,
        URL_demo: null, },

       Detail : {
          Category: null,
          Contract_type: null,
          Date_updated: null,
          Description_complete: null,
          Img: null,
          Nb_sales: 0,
          Status: 'Waiting',
          Tags: null,
          Technologies: null,
          Type: null,
              }
      };
     itemRef: any;
     itemRef2: any;
     tag: any;
     technologie: any;
     prix_etendu: any;
     prix_regulier: any;
     img: FileList;
     thumbnail: FileList;

  typeKey( event: KeyboardEvent) { // with type info
    this.produit.Detail.Type = (<HTMLInputElement>event.target).value ;
  }

  categorieKey( event: KeyboardEvent) { // with type info
    this.produit.Detail.Category = (<HTMLInputElement>event.target).value ;
  }

  detectImg(event) {
      this.img = event.target.files;
  }

  detectThum(event) {
      this.thumbnail = event.target.files;
  }


  pushUpload(files: FileList , path: any , URL: any) {
    const file = this.img.item(0);
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${path}/${file.name}`).put(file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
      },
      (error) => {
        // upload failed
        console.log(error);
      },
      () => {
        // upload success
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        URL = downloadURL;
  });
    }
    );
  }

  save() {
    this.produit.Detail.Technologies = this.technologie.split(' ', );
    this.produit.Detail.Tags = this.tag.split(' ', );
    this.produit.Brief.Price.Régulier = this.prix_regulier;
    this.produit.Brief.Price.Etendu = this.prix_etendu;
    this.pushUpload(this.img, '/imgaes', this.produit.Detail.Img);
    this.pushUpload(this.thumbnail, '/thumbnail', this.produit.Brief.Thumbnail);
    this.itemRef.push(this.produit.Detail);
    this.itemRef2.push(this.produit.Brief);
       }

  constructor(db: AngularFireDatabase) {
    this.itemRef = db.list('/Products/Detail');
    this.itemRef2 = db.list('/Products/Brief');
    this.produit.Brief.Date_added = Date.now();

  }


  ngOnInit() {
  }


}
interface DetailDesc {
   Category: any;
Contract_type: any;
Date_updated: any;
Description_complete: any;
Img: any;
Nb_sales: any;
Status: any;
Tags: any[];
Technologies: any[];
Type: any;

}

interface BriefDesc {
  Date_added: any;
Description_brief: any;
Name: any;
Price: Prix;
Thumbnail: any;
URL_demo: any;
}
interface Prix {
  Etendu: any;
  Régulier: any;
}
interface DetailProduct {
  Brief: BriefDesc;
  Detail: DetailDesc;
}

