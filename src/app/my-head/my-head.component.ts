import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav.service';
import { NavComponent } from '../nav/nav.component';



@Component({
  selector: 'app-my-head',
  templateUrl: './my-head.component.html',
  styleUrls: ['./my-head.component.css']
})
export class MyHeadComponent implements OnInit {

 constructor(public navService: NavService){
 }

  ngOnInit() {
  }

}
