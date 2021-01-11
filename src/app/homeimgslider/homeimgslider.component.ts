import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeimgslider',
  templateUrl: './homeimgslider.component.html',
  styleUrls: ['./homeimgslider.component.css']
})
export class HomeimgsliderComponent implements OnInit {

  images = [
    '../assets/images/img1.jpg',
    '../assets/images/img2.jpg',
    '../assets/images/img3.jpg',
    '../assets/images/img4.jfif',
    '../assets/images/img5.jfif'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
