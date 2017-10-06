import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviecategories',
  templateUrl: './moviecategories.component.html',
  styleUrls: ['./moviecategories.component.css']
})
export class MoviecategoriesComponent implements OnInit {

  constructor() { }


  categories = [
    { cname: 'Action', coverimage: './assets/img/action.jpg' },
    { cname: 'Romance', coverimage: './assets/img/romance.jpg' },
    { cname: 'Comedy', coverimage: './assets/img/comedy.jpg' },
    { cname: 'Drama', coverimage: './assets/img/drama.jpg' },
    { cname: 'Animation', coverimage: './assets/img/animation.jpg' },
    { cname: 'War', coverimage: './assets/img/war.jpg' },
    { cname: 'Thriller', coverimage: './assets/img/thriller.jpg' },
    { cname: 'Horror', coverimage: './assets/img/horror.jpg' },
    { cname: 'Classic', coverimage: './assets/img/classic.jpg' },

  ];

  ngOnInit() {
  }





}
