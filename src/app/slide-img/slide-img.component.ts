import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-slide-img',
  templateUrl: './slide-img.component.html',
  styleUrls: ['./slide-img.component.css']
})
export class SlideImgComponent implements OnInit {
@Input () lien:any;
  constructor() { }

  ngOnInit() {
  }

}
