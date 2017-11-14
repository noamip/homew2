import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyHeadComponent } from './my-head/my-head.component';
import { MainCComponent } from './main-c/main-c.component';
import { AsideCComponent } from './aside-c/aside-c.component';
import { ImagesComponent } from './images/images.component';
import { NavComponent } from './nav/nav.component';
import { NavService } from './nav.service';
@NgModule({
  declarations: [
    AppComponent,
    MyHeadComponent,
    MainCComponent,
    AsideCComponent,
    ImagesComponent,
    NavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    NavService
      ],
  bootstrap: [AppComponent]

})
export class AppModule { }
