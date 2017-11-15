import { Injectable } from '@angular/core';

@Injectable()
export class NavService {
public navItems:NavItem[];
  constructor() {
    this.navItems=[
      new NavItem("Home",""),
      new NavItem("Offers",""),
      new NavItem("Aboout",""),
      new NavItem("Contact us","")
    ]
   }

}
export class NavItem{
  
constructor(public text:string, public url:string){
} 
}