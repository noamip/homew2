import { Component } from '@angular/core';
import { MyHeadComponent } from './my-head/my-head.component';
import { MainCComponent } from './main-c/main-c.component';
import { AsideCComponent } from './aside-c/aside-c.component';
import { NavService } from './nav.service';
import { NavComponent } from './nav/nav.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public navService:NavService){
    
  }
}
