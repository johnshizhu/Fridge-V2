import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarIndexComponent } from './nav-bar-index/nav-bar-index.component';
import { IndexComponent } from './index/index.component';
import { IndexFooterComponent } from './index-footer/index-footer.component';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavBarIndexComponent,
    IndexComponent,
    IndexFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'nav-bar-index', component: NavBarIndexComponent},
      {path: 'index', component: IndexComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
