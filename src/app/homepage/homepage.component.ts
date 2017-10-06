import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  movies: any = [{
    movieId: '0',
    movieName: 'Avengers',
    release: '2012',
    rating: '5',
    // tslint:disable-next-line:max-line-length
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuri'
  },
  {
    movieId: '0',
    movieName: 'Chak-de-india',
    release: '2012',
    rating: '5',
    // tslint:disable-next-line:max-line-length
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuri'
  },
  {
    movieId: '0',
    movieName: 'Chak-de-india',
    release: '2012',
    rating: '5',
    // tslint:disable-next-line:max-line-length
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuri'
  }, {
    movieId: '0',
    movieName: 'Chak-de-india',
    release: '2012',
    rating: '5',
    // tslint:disable-next-line:max-line-length
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuri'
  }
  ];
  constructor() { }

  ngOnInit() {
  }







}
