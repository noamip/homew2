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
    this.images=["assets/kids-reading.jpg","assets/read.jpg","http://rs1220.pbsrc.com/albums/dd454/wulant12/reading-1.jpg?w=280&h=210&fit=crop","http://rs153.pbsrc.com/albums/s229/camzi07/Reading_by_Tooshtoosh.jpg?w=280&h=210&fit=crop","http://rs296.pbsrc.com/albums/mm166/wpplphotos/Readingboys.jpg?w=280&h=210&fit=crop"];
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