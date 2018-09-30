import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs';
import {DBFunctionsService} from '../shared/Services/db-functions.service';
import * as $ from 'jquery';
import {concat} from 'rxjs/internal/observable/concat';
import {filterQueryId} from '@angular/core/src/view/util';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  Projets: any[];
  Prjs: any[];
  bool: boolean = true;
  ProjetsCat: any[] = [];
  ProjetsType: any[] = [];
  ProjetsPrix: any[] = [];
  ProjetsDate: any[] = [];
  ProjetsRating: any[] = [];
  ProjetsAffich: any = [];
  ProjetsAffichShow: any = [];
  Nbshow: number = 3;
  ShowDisabl: boolean = true;
  ShowDisabl1: boolean = true;
  show: number = this.Nbshow;
  Nbresult: number = 0;
  edited: boolean = true;
  edited2: boolean = false;
  hide: boolean = true;
  chosenMod: string = 'mod5';

  /*******************************/ //filterCategories Vars
  filtreCatBool: boolean = false;
  filtreCatBool1: boolean = false;
  filtreCatBool2: boolean = false;
  filtreCatBool3: boolean = false;
  filtreCatBool4: boolean = false;
  filtreCatBool5: boolean = false;
  filtreCatBool6: boolean = false;
  /*********************************/ //filterType Vars
  filtreTypeBool: boolean = false;
  filtreTypeBool1: boolean = false;
  filtreTypeBool2: boolean = false;
  filtreTypeBool3: boolean = false;
  filtreTypeBool4: boolean = false;
  filtreTypeBool5: boolean = false;
  filtreTypeBool6: boolean = false;
  filtreTypeBool7: boolean = false;
  filtreTypeBool8: boolean = false;
  /*******************************/  //filterPrix Vars
  filterPrixBool: boolean = false;
  PrixMin: number = 0;
  PrixMax: number = 0;
  /*******************************/ //filterDate Vars
  date = new Date();
  Date: String[] = [];
  lastWeek = new Date(this.date.getFullYear(), this.date.getUTCMonth(), this.date.getDate() - 7);
  lastMonth = new Date(this.date.getFullYear(), this.date.getUTCMonth(), this.date.getDate());
  lastYear = new Date(this.date.getFullYear(), this.date.getUTCMonth(), this.date.getDate());
  filtreDateBool: boolean = false;
  filtreDateBool1: boolean = false;
  filtreDateBool2: boolean = false;
  filtreDateBool3: boolean = false;
  filtreDateBool4: boolean = false;
  /*******************************/ // filterRating Vars
  filtreRating: any = null;
  filtreRatBool: boolean = false;
  filtreRatBool1: boolean = false;
  filtreRatBool2: boolean = false;
  filtreRatBool3: boolean = false;
  filtreRatBool4: boolean = false;
  filtreRatBool5: boolean = false;
  filtreRatBool6: boolean = false;
  /******************************************************/ //Constructor
  constructor(serviceDB: DBFunctionsService) {
    this.Projets = serviceDB.Projets;
    this.Prjs = serviceDB.Projets;
    this.ProjetsAffich = this.Prjs;
    this.ProjetsAffichShow = this.Prjs;
    for (let prj in this.Projets) {
      console.log(this.RatingMax(this.Projets[prj].Rating, 1));
    }
    this.GetLenght(this.Projets);
    this.saveTodos();


  }

  /*******************************************************/ // Intersection Function
  Intersection() {
    console.log('filtretypeBool=' + this.filtreTypeBool, 'filtrecatBool=' + this.filtreCatBool);
    this.show = this.Nbshow;
    this.ProjetsAffich = [];
    this.Projets = this.Prjs;
    if (this.filtreCatBool) {
      console.log('filterbool===' + this.filtreCatBool);
      if (!this.filtreCatBool6) {
        console.log('week1');

        for (let prj in this.Projets) {
          if (this.filtreCatBool1) {
            if (this.Projets[prj].categorie === 'gestion') {
              this.ProjetsCat.push(this.Projets[prj]);
            }
          }
          if (this.filtreCatBool2) {
            if (this.Projets[prj].categorie === 'comptabilité') {
              this.ProjetsCat.push(this.Projets[prj]);
            }
          }
          if (this.filtreCatBool3) {
            if (this.Projets[prj].categorie === 'RH') {
              this.ProjetsCat.push(this.Projets[prj]);
            }
          }
          if (this.filtreCatBool4) {
            if (this.Projets[prj].categorie === 'finance') {
              this.ProjetsCat.push(this.Projets[prj]);
            }
          }
          if (this.filtreCatBool5) {
            if (this.Projets[prj].categorie === 'communication') {
              this.ProjetsCat.push(this.Projets[prj]);
            }
          }

        }
        this.Projets = this.ProjetsCat;
      }

      this.ProjetsCat = [];
    }
    if (this.filtreTypeBool) {
      if (!this.filtreTypeBool8) {
        console.log('week2');
        for (let prj in this.Projets) {
          if (this.filtreTypeBool1) {
            if (this.Projets[prj].Type === 'siteweb') {
              this.ProjetsType.push(this.Projets[prj]);
            }
          }
          if (this.filtreTypeBool2) {
            if (this.Projets[prj].Type === 'app mobile') {
              this.ProjetsType.push(this.Projets[prj]);
            }
          }
          if (this.filtreTypeBool3) {
            if (this.Projets[prj].Type === 'logiciel desktop') {
              this.ProjetsType.push(this.Projets[prj]);
            }
          }
          if (this.filtreTypeBool4) {
            if (this.Projets[prj].Type === 'script') {
              this.ProjetsType.push(this.Projets[prj]);
            }
          }
          if (this.filtreTypeBool5) {
            if (this.Projets[prj].Type === 'bdd') {
              this.ProjetsType.push(this.Projets[prj]);
            }
          }
          if (this.filtreTypeBool6) {
            if (this.Projets[prj].Type === 'module') {
              this.ProjetsType.push(this.Projets[prj]);
            }
          }
          if (this.filtreTypeBool7) {
            if (this.Projets[prj].Type === 'plugin') {
              this.ProjetsType.push(this.Projets[prj]);
            }
          }


        }
        this.Projets = this.ProjetsType;
      }
      this.ProjetsType = [];
    }
    if (this.filterPrixBool) {
      for (let prj in this.Projets) {
        if (Number(this.Projets[prj].Prix) >= this.PrixMin && Number(this.Projets[prj].Prix) <= this.PrixMax) {
          this.ProjetsPrix.push(this.Projets[prj]);

        }
      }
      this.Projets = this.ProjetsPrix;

      this.ProjetsPrix = [];
    }
    if (this.filtreDateBool) {
      if (!this.filtreDateBool4) {

        for (let prj in this.Projets) {
          this.Date = (this.Projets[prj].date_pub).split('/');
          if (this.filtreDateBool1 && !this.filtreDateBool2 && !this.filtreDateBool3) {

            if (Number(this.Date[0]) > 7) {
              if (Number(this.Date[0]) > Number(this.lastWeek.getDate()) && Number(this.Date[1]) === Number(this.lastWeek.getMonth() + 1) && Number(this.Date[2]) === Number(this.lastWeek.getFullYear())) {
                this.ProjetsDate.push(this.Projets[prj]);
              }

            } else {
              if (Number(this.Date[0]) > Number(this.lastWeek.getDate()) && Number(this.Date[1]) === Number(this.lastWeek.getMonth()) && Number(this.Date[2]) === Number(this.lastWeek.getFullYear())) {
                this.ProjetsDate.push(this.Projets[prj]);
              }
            }
          }
          if (this.filtreDateBool2 && !this.filtreDateBool3) {
            console.log('month');

            if (Number(this.Date[1]) === Number(this.lastMonth.getMonth() + 1) && Number(this.Date[2]) === Number(this.lastMonth.getFullYear())) {
              this.ProjetsDate.push(this.Projets[prj]);
            }
          }
          if (this.filtreDateBool3) {
            console.log('year');

            if (Number(this.Date[2]) === Number(this.lastYear.getFullYear())) {
              this.ProjetsDate.push(this.Projets[prj]);
            }
          }

        }
        this.Projets = this.ProjetsDate;

      }
      this.ProjetsDate = [];
    }
    if (this.filtreRatBool) {
      console.log('her1');
      for (let prj in this.Projets) {
        if (this.filtreRatBool1) {
          if (Number(this.Projets[prj].Rating[1]) === 0 && Number(this.Projets[prj].Rating[2]) === 0 && Number(this.Projets[prj].Rating[3]) === 0 && Number(this.Projets[prj].Rating[4]) === 0 && Number(this.Projets[prj].Rating[5]) === 0) {
            this.ProjetsRating.push(this.Projets[prj]);
            console.log('her2');
          }
        }
        if (this.filtreRatBool2) {
          if (this.RatingMax(this.Projets[prj].Rating, 1)) {
            this.ProjetsRating.push(this.Projets[prj]);
            console.log('her3');
          }

        }
        if (this.filtreRatBool3) {
          if (this.RatingMax(this.Projets[prj].Rating, 2)) {
            this.ProjetsRating.push(this.Projets[prj]);
            console.log('her4');
          }

        }
        if (this.filtreRatBool4) {
          if (this.RatingMax(this.Projets[prj].Rating, 3)) {
            this.ProjetsRating.push(this.Projets[prj]);
            console.log('her5');
          }

        }
        if (this.filtreRatBool5) {
          var bool: boolean = this.RatingMax((this.Projets[prj].Rating), 4);
          console.log(this.RatingMax(this.Projets[prj].Rating, 4));
          if (bool === true) {

            this.ProjetsRating.push(this.Projets[prj]);
            console.log('her6');
          }

        }
        if (this.filtreRatBool6) {
          var bool: boolean = this.RatingMax((this.Projets[prj].Rating), 5);
          console.log(this.RatingMax(this.Projets[prj].Rating, 5));
          if (bool === true) {
            this.ProjetsRating.push(this.Projets[prj]);
            console.log('her7');
          }

        }
        console.log(this.ProjetsRating);
        this.Projets = this.ProjetsRating;
        this.ProjetsRating = [];
      }
    }
    this.ProjetsAffich = this.Projets;
    this.ProjetsAffichShow = this.Projets;
    this.GetLenght(this.ProjetsAffich);
    this.modo();
    console.log(this.ProjetsAffich);
  }

  /*****************************************************************************/ //calcul Rating Max
  RatingMax(Data: any [], Pos: number) {
    let val = 0;
    console.log('rating max :' + Data);
    for (let i in Data) {
      console.log('For');
      if (Number(i) === Pos) {
        console.log('if 1');
        val = Number(Data[i]);
      }
    }
    for (let k in Data) {
      if (Number(Data[k]) > val) {
        console.log('if 2');
        return false;
      }
    }
    return true;
  }

  /******************************************************************************/ // Lenght Function
  GetLenght(Data: any[]) {
    this.Nbresult = 0;
    for (let j in Data) {
      this.Nbresult++;
    }
  }

  /*************************************************************** */ //chekbox categories
  checkCat1() {
    this.filtreCatBool1 = !this.filtreCatBool1;
    console.log(this.filtreCatBool1);
    if (this.filtreCatBool1 || this.filtreCatBool2 || this.filtreCatBool3 || this.filtreCatBool4) {
      this.filtreCatBool = true;
      console.log(this.filtreCatBool);
    }
    else {
      this.filtreCatBool = false;
      console.log(this.filtreCatBool);
    }
  }

  /*************************************************************** */
  checkCat2() {
    this.filtreCatBool2 = !this.filtreCatBool2;
    console.log(this.filtreCatBool2);
    if (this.filtreCatBool1 || this.filtreCatBool2 || this.filtreCatBool3 || this.filtreCatBool4) {
      this.filtreCatBool = true;
      console.log(this.filtreCatBool);
    }
    else {
      this.filtreCatBool = false;
      console.log(this.filtreCatBool);
    }
  }

  /*************************************************************** */
  checkCat3() {
    this.filtreCatBool3 = !this.filtreCatBool3;
    if (this.filtreCatBool1 || this.filtreCatBool2 || this.filtreCatBool3 || this.filtreCatBool4) {
      this.filtreCatBool = true;
    }
    else {
      this.filtreCatBool = false;
      console.log(this.filtreCatBool);
    }
  }

  /**************************************************************** */
  checkCat4() {
    this.filtreCatBool4 = !this.filtreCatBool4;
    if (this.filtreCatBool1 || this.filtreCatBool2 || this.filtreCatBool3 || this.filtreCatBool4) {
      this.filtreCatBool = true;
    }
    else {
      this.filtreCatBool = false;
      console.log(this.filtreCatBool);
    }
  }

  /**************************************************************** */
  checkCat5() {
    this.filtreCatBool5 = !this.filtreCatBool5;
    if (this.filtreCatBool1 || this.filtreCatBool2 || this.filtreCatBool3 || this.filtreCatBool4 || this.filtreCatBool5) {
      this.filtreCatBool = true;
    }
    else {
      this.filtreCatBool = false;
      console.log(this.filtreCatBool);
    }
  }

  /*************************************************************** */
  checkCat6() {
    this.filtreCatBool6 = !this.filtreCatBool6;
    if (this.filtreCatBool1 || this.filtreCatBool2 || this.filtreCatBool3 || this.filtreCatBool4 || this.filtreCatBool5) {
      this.filtreCatBool = true;
    }
    else {
      this.filtreCatBool = false;
      console.log(this.filtreCatBool);
    }
  }

  /*****************************************************************************/ //CheckBox Type
  checkType1() {
    this.filtreTypeBool1 = !this.filtreTypeBool1;
    console.log(this.filtreTypeBool1);
    if (this.filtreTypeBool1 || this.filtreTypeBool2 || this.filtreTypeBool3 || this.filtreTypeBool4 || this.filtreTypeBool5 || this.filtreTypeBool6 || this.filtreTypeBool7 || this.filtreTypeBool8) {
      this.filtreTypeBool = true;
      console.log(this.filtreTypeBool);
    }
    else {
      this.filtreTypeBool = false;
      console.log(this.filtreTypeBool);
    }
  }

  /*************************************************************** */
  checkType2() {
    this.filtreTypeBool2 = !this.filtreTypeBool2;
    console.log(this.filtreTypeBool2);
    if (this.filtreTypeBool1 || this.filtreTypeBool2 || this.filtreTypeBool3 || this.filtreTypeBool4 || this.filtreTypeBool5 || this.filtreTypeBool6 || this.filtreTypeBool7 || this.filtreTypeBool8) {
      this.filtreTypeBool = true;
      console.log(this.filtreTypeBool);
    }
    else {
      this.filtreTypeBool = false;
      console.log(this.filtreTypeBool);
    }
  }

  /*************************************************************** */
  checkType3() {
    this.filtreTypeBool3 = !this.filtreTypeBool3;
    console.log(this.filtreTypeBool3);
    if (this.filtreTypeBool1 || this.filtreTypeBool2 || this.filtreTypeBool3 || this.filtreTypeBool4 || this.filtreTypeBool5 || this.filtreTypeBool6 || this.filtreTypeBool7 || this.filtreTypeBool8) {
      this.filtreTypeBool = true;
      console.log(this.filtreTypeBool);
    }
    else {
      this.filtreTypeBool = false;
      console.log(this.filtreTypeBool);
    }
  }

  /**************************************************************** */
  checkType4() {

    this.filtreTypeBool4 = !this.filtreTypeBool4;
    console.log(this.filtreTypeBool4);
    if (this.filtreTypeBool1 || this.filtreTypeBool2 || this.filtreTypeBool3 || this.filtreTypeBool4 || this.filtreTypeBool5 || this.filtreTypeBool6 || this.filtreTypeBool7 || this.filtreTypeBool8) {
      this.filtreTypeBool = true;
      console.log(this.filtreTypeBool);
    }
    else {
      this.filtreTypeBool = false;
      console.log(this.filtreTypeBool);
    }
  }

  /****************************************************************/
  checkType5() {

    this.filtreTypeBool5 = !this.filtreTypeBool5;
    console.log(this.filtreTypeBool5);
    if (this.filtreTypeBool1 || this.filtreTypeBool2 || this.filtreTypeBool3 || this.filtreTypeBool4 || this.filtreTypeBool5 || this.filtreTypeBool6 || this.filtreTypeBool7 || this.filtreTypeBool8) {
      this.filtreTypeBool = true;
      console.log(this.filtreTypeBool);
    }
    else {
      this.filtreTypeBool = false;
      console.log(this.filtreTypeBool);
    }
  }

  /****************************************************************/
  checkType6() {

    this.filtreTypeBool6 = !this.filtreTypeBool6;
    console.log(this.filtreTypeBool6);
    if (this.filtreTypeBool1 || this.filtreTypeBool2 || this.filtreTypeBool3 || this.filtreTypeBool4 || this.filtreTypeBool5 || this.filtreTypeBool6 || this.filtreTypeBool7 || this.filtreTypeBool8) {
      this.filtreTypeBool = true;
      console.log(this.filtreTypeBool);
    }
    else {
      this.filtreTypeBool = false;
      console.log(this.filtreTypeBool);
    }
  }

  /****************************************************************/
  checkType7() {

    this.filtreTypeBool7 = !this.filtreTypeBool7;
    console.log(this.filtreTypeBool7);
    if (this.filtreTypeBool1 || this.filtreTypeBool2 || this.filtreTypeBool3 || this.filtreTypeBool4 || this.filtreTypeBool5 || this.filtreTypeBool6 || this.filtreTypeBool7 || this.filtreTypeBool8) {
      this.filtreTypeBool = true;
      console.log(this.filtreTypeBool);
    }
    else {
      this.filtreTypeBool = false;
      console.log(this.filtreTypeBool);
    }
  }

  /****************************************************************/
  checkType8() {

    this.filtreTypeBool8 = !this.filtreTypeBool8;
    console.log(this.filtreTypeBool8);
    if (this.filtreTypeBool1 || this.filtreTypeBool2 || this.filtreTypeBool3 || this.filtreTypeBool4 || this.filtreTypeBool5 || this.filtreTypeBool6 || this.filtreTypeBool7 || this.filtreTypeBool8) {
      this.filtreTypeBool = true;
      console.log(this.filtreTypeBool);
    }
    else {
      this.filtreTypeBool = false;
    }
  }

  /**************************************************************************/  //Button Prix
  submitPrix() {
    console.log('prixMin=' + this.PrixMin, 'prixmax=' + this.PrixMax);
    if (this.PrixMin != 0 || this.PrixMax != 0) {
      this.filterPrixBool = true;
    } else {
      this.filterPrixBool = false;
    }
  }

  /**************************************************************************/ //checkbox date
  checkDate1() {
    this.filtreDateBool1 = !this.filtreDateBool1;
    if (this.filtreDateBool1 || this.filtreDateBool2 || this.filtreDateBool3 || this.filtreDateBool4) {
      this.filtreDateBool = true;
    }
    else {
      this.filtreDateBool = false;
    }
  }

  /***************************************************************** */
  checkDate2() {
    this.filtreDateBool2 = !this.filtreDateBool2;
    if (this.filtreDateBool1 || this.filtreDateBool2 || this.filtreDateBool3 || this.filtreDateBool4) {
      this.filtreDateBool = true;
    }
    else {
      this.filtreDateBool = false;
    }
  }

  /***************************************************************** */
  checkDate3() {
    this.filtreDateBool3 = !this.filtreDateBool3;
    if (this.filtreDateBool1 || this.filtreDateBool2 || this.filtreDateBool3 || this.filtreDateBool4) {
      this.filtreDateBool = true;
    }
    else {
      this.filtreDateBool = false;
    }
  }

  /**************************************************************** */
  checkDate4() {
    this.filtreDateBool4 = !this.filtreDateBool4;
    if (this.filtreDateBool1 || this.filtreDateBool2 || this.filtreDateBool3 || this.filtreDateBool4) {
      this.filtreDateBool = true;
    }
    else {
      this.filtreDateBool = false;
    }
  }

  /*************************************************************** */
  /*************************************************************** */ //chekbox Rating
  checkRat1() {
    this.filtreRatBool1 = !this.filtreRatBool1;
    console.log(this.filtreRatBool1);
    if (this.filtreRatBool1 || this.filtreRatBool2 || this.filtreRatBool3 || this.filtreRatBool4 || this.filtreRatBool5 || this.filtreRatBool6) {
      this.filtreRatBool = true;
      console.log(this.filtreRatBool);
    }
    else {
      this.filtreRatBool = false;
      console.log(this.filtreRatBool);
    }
  }

  /*************************************************************** */
  checkRat2() {
    this.filtreRatBool2 = !this.filtreRatBool2;
    console.log(this.filtreRatBool2);
    if (this.filtreRatBool1 || this.filtreRatBool2 || this.filtreRatBool3 || this.filtreRatBool4 || this.filtreRatBool5 || this.filtreRatBool6) {
      this.filtreRatBool = true;
      console.log(this.filtreRatBool);
    }
    else {
      this.filtreRatBool = false;
      console.log(this.filtreRatBool);
    }
  }

  /*************************************************************** */
  checkRat3() {
    this.filtreRatBool3 = !this.filtreRatBool3;
    console.log(this.filtreRatBool3);
    if (this.filtreRatBool1 || this.filtreRatBool2 || this.filtreRatBool3 || this.filtreRatBool4 || this.filtreRatBool5 || this.filtreRatBool6) {
      this.filtreRatBool = true;
      console.log(this.filtreRatBool);
    }
    else {
      this.filtreRatBool = false;
      console.log(this.filtreRatBool);
    }
  }

  /*************************************************************** */
  checkRat4() {
    this.filtreRatBool4 = !this.filtreRatBool4;
    console.log(this.filtreRatBool4);
    if (this.filtreRatBool1 || this.filtreRatBool2 || this.filtreRatBool3 || this.filtreRatBool4 || this.filtreRatBool5 || this.filtreRatBool6) {
      this.filtreRatBool = true;
      console.log(this.filtreRatBool);
    }
    else {
      this.filtreRatBool = false;
      console.log(this.filtreRatBool);
    }
  }

  /*************************************************************** */
  checkRat5() {
    this.filtreRatBool5 = !this.filtreRatBool5;
    console.log(this.filtreRatBool5);
    if (this.filtreRatBool1 || this.filtreRatBool2 || this.filtreRatBool3 || this.filtreRatBool4 || this.filtreRatBool5 || this.filtreRatBool6) {
      this.filtreRatBool = true;
      console.log(this.filtreRatBool);
    }
    else {
      this.filtreRatBool = false;
      console.log(this.filtreRatBool);
    }
  }

  /*************************************************************** */
  checkRat6() {
    this.filtreRatBool6 = !this.filtreRatBool6;
    console.log(this.filtreRatBool6);
    if (this.filtreRatBool1 || this.filtreRatBool2 || this.filtreRatBool3 || this.filtreRatBool4 || this.filtreRatBool5 || this.filtreRatBool6) {
      this.filtreRatBool = true;
      console.log(this.filtreRatBool);
    }
    else {
      this.filtreRatBool = false;
      console.log(this.filtreRatBool);
    }
  }

  /*************************************************************** */ //Sort by Date
  SortByDate() {
    var h: any;
    if (this.ProjetsAffich != undefined) {
      this.ProjetsAffich.sort((a: any, b: any) => {
        if (((a.date_pub).split('/'))[2] < ((b.date_pub).split('/')[2])) {
          console.log(((a.date_pub).split('/'))[2] + ' ' + ((b.date_pub).split('/')[2]));
          console.log('i\'m here1' + ' ' + a.date_pub + ' ', b.date_pub);

          return -1;
        } else if (((a.date_pub).split('/'))[2] > ((b.date_pub).split('/')[2])) {
          console.log('i\'m here2' + ' ' + a.date_pub + ' ', b.date_pub);
          return 1;
        } else {
          if (((a.date_pub).split('/'))[1] < ((b.date_pub).split('/')[1])) {
            console.log(((a.date_pub).split('/'))[2] + ' ' + ((b.date_pub).split('/')[2]));
            console.log('i\'m here1' + ' ' + a.date_pub + ' ', b.date_pub);

            return -1;
          } else if (((a.date_pub).split('/'))[1] > ((b.date_pub).split('/')[1])) {
            console.log('i\'m here2' + ' ' + a.date_pub + ' ', b.date_pub);
            return 1;
          } else {
            if (((a.date_pub).split('/'))[0] < ((b.date_pub).split('/')[0])) {
              console.log(((a.date_pub).split('/'))[2] + ' ' + ((b.date_pub).split('/')[2]));
              console.log('i\'m here1' + ' ' + a.date_pub + ' ', b.date_pub);

              return -1;
            } else if (((a.date_pub).split('/'))[0] > ((b.date_pub).split('/')[0])) {
              console.log('i\'m here2' + ' ' + a.date_pub + ' ', b.date_pub);
              return 1;
            } else return 0;

          }

        }

      });
      console.log('i\'m here');
    }
  }

  /*************************************************************** */  //Sort price low to high
  SortByPrixLh() {

    if (this.ProjetsAffich != undefined) {
      this.ProjetsAffich.sort((a: any, b: any) => {
        if (Number(a.Prix) < Number(b.Prix)) {
          console.log((Number(a.Prix) + ' ' + Number(b.Prix)));
          return -1;
        } else if (Number(a.Prix) > Number(b.Prix)) {
          console.log((Number(a.Prix) + ' ' + Number(b.Prix)));
          return 1;
        } else {
          console.log((Number(a.Prix) + ' ' + Number(b.Prix)));
          return 0;
        }
      });
    }
  }

  /************************************************************** */  //Sort price high to low
  SortByPrixHl() {
    var h: any;
    if (this.ProjetsAffich != undefined) {
      this.ProjetsAffich.sort((a: any, b: any) => {
        if (Number(a.Prix) > Number(b.Prix)) {
          console.log((Number(a.Prix) + ' ' + Number(b.Prix)));
          return -1;
        } else if (Number(a.Prix) < Number(b.Prix)) {
          console.log((Number(a.Prix) + ' ' + Number(b.Prix)));
          return 1;
        } else {
          return 0;
        }
      });
    }
  }

  /*****************************************************************/ //Sort by best rating
  SortByRating() {
    if (this.ProjetsAffich != undefined) {
      this.ProjetsAffich.sort((a: any, b: any) => {
        if (this.bestRating(a.Rating) < this.bestRating(b.Rating)) {
          console.log((Number(a.Prix) + ' ' + Number(b.Prix)));
          return -1;
        } else if (this.bestRating(a.Rating) > this.bestRating(b.Rating)) {
          console.log((Number(a.Prix) + ' ' + Number(b.Prix)));
          return 1;
        } else {
          console.log((Number(a.Prix) + ' ' + Number(b.Prix)));
          return 0;
        }
      });
    }
    console.log('apr rating =' + this.ProjetsAffich);
  }

  /*****************************************************************/
  bestRating(Data: any []) {
    if (this.RatingMax(Data[1], 1)) {
      return 1;

    } else if (this.RatingMax(Data[2], 2)) {
      return 2;
    }
    else if (this.RatingMax(Data[3], 3)) {
      return 3;
    }
    else if (this.RatingMax(Data[4], 4)) {
      return 4;
    }
    else if (this.RatingMax(Data[5], 5)) {
      return 5;
    }
  }

  /*************************************************************** */  // Sort
  modo() {

    switch (this.chosenMod) {
      case 'mod1': {
        this.SortByDate();
        break;
      }
      case 'mod2': {
        this.SortByRating();
        break;
      }
      case 'mod3': {
        this.SortByPrixLh();
        break;
      }
      case 'mod4': {
        this.SortByPrixHl();
        break;
      }
      case 'mod5': {

        break;
      }
    }
    this.saveTodos();
  }

  /***************************************************************** */ // chargement...
  saveTodos(): void {
    this.edited = true;
    this.edited2 = false;
    setTimeout(function () {
      this.edited = false;
      this.edited2 = true;
      console.log(this.edited);
    }.bind(this), 2200);
  }

  /**************************************************************/ //Show Data by nb (4 or 8 or all)
  Show() {
    var data: any[] = [];

    this.GetLenght(this.ProjetsAffich);
    if (this.Nbresult >= this.Nbshow) {
      //if((this.show-this.Nbresult)<this.Nbshow){ this.ShowDisabl=false;}
      this.ProjetsAffich = [];
      console.log('im hereeeeee');
      for (let prj in this.ProjetsAffichShow) {
        console.log('number prj=' + Number(prj) + 'show =' + this.show);
        if (Number(prj) >= (this.show - this.Nbshow) && Number(prj) < this.show) {

          if (this.ProjetsAffichShow[prj] != null) {
            console.log('1');
            data.push(this.ProjetsAffichShow[prj]);
          }
        }
      }
      this.ProjetsAffich = data;
      this.show = this.show + this.Nbshow;

    }
    else {
      this.ShowDisabl = false;
    }
  }

  /********************************************************************************* */
  Hide() {
    this.hide = !this.hide;
  }
}
