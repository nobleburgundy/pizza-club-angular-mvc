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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: LoginPageComponent },
      { path: 'create-club', component: CreateClubFormComponent },
      { path: 'add-pizza', component: CreatePizzaFormComponent },
      { path: 'create-account', component: CreateAccountFormComponent },
      { path: 'club-page', component: ClubPageComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
