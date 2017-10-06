import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { MovieCardComponent } from './movie/movie-card/movie-card.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';



const appRoutes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent},
  { path: '', component: HomepageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'movie-detail', component: MovieDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    MovieCardComponent,
    MovieDetailComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }

