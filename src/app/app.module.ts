import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { CreatePizzaFormComponent } from './create-pizza-form/create-pizza-form.component';
import { CreateClubFormComponent } from './create-club-form/create-club-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';
import { ClubPageComponent } from './club-page/club-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ClubListPageComponent } from './club-list-page/club-list-page.component';
import { ClubDetailPageComponent } from './club-detail-page/club-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    CreatePizzaFormComponent,
    CreateClubFormComponent,
    LoginPageComponent,
    CreateAccountFormComponent,
    ClubPageComponent,
    NavBarComponent,
    ClubListPageComponent,
    ClubDetailPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ClubListPageComponent },
      { path: 'create-club', component: CreateClubFormComponent },
      { path: 'add-pizza', component: CreatePizzaFormComponent },
      { path: 'create-account', component: CreateAccountFormComponent },
      { path: 'club-page', component: ClubPageComponent },
      { path: 'club/:id', component: ClubDetailPageComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
