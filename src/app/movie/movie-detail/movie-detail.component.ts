import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

 public movie : any = {
  id : '',
  movieImg : 'https://static.comicvine.com/uploads/scale_small/11/113509/4413258-ultron.jpg',
  movieName : 'Avengers: Age of Ultron',
  movieAvrgRating : '4.5',
  movieDescription : 'Here we write movie description.',
  movieLanguage : 'English',
  movieYear : '2006',
  movieTotalReviews : '25'
}

public reviews : any =[ {
  userImage : './assets/img/avtar.png',
  userName : 'User Name',
  userRating : '5',
  userReview : 'User Review will apear here. '

}, {
  userImage : './assets/img/avtar.png',
  userName : 'User name',
  userRating : '3',
  userReview : ' 2 User Review will apear here. '

},];
  constructor() {



    console.log(this.movie.movieImg);
   }
  
  ngOnInit() {
  }
  onSubmit(reviewForm: any) {
    //alert("abhi");
    console.log(reviewForm.value);  // { first: '', last: '' }
    
  }
  isLogin() {
    return true;
  }
  
  isReviewed(){
    return true;
  }

}
