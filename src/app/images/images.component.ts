import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
public images:string[];
public index:number;
public urlImage:string;
  constructor() {
    this.index=0;
    this.images=["assets/read.jpg","assets/reading-1.jpg","assets/read2.jpg","assets/read3.jpg"];
    this.urlImage=this.Image;
    setInterval(()=>{
      this.urlImage=this.Image;
    },10000)
   }
  

  ngOnInit() {
  }

  public get Image(){
    this.index++;
    this.index%=this.images.length;
    return this.images[this.index];
    }
    
}