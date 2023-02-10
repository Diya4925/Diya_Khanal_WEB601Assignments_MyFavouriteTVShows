import { style } from '@angular/animations';
import {Component, Input, OnInit} from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  @Input() content: Content;
  constructor() {
    this.content = {
      id:1,
  title:"The Grey's Anatomy",
  description:"One of the longest running show which is based on medicine.",
  creator:"Shonda Rimes",
  imgURL:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpagesix.com%2F2020%2F03%2F27%2Fwhere-the-original-greys-anatomy-cast-is-today%2F&psig=AOvVaw00a9FRsnpUL3Vvnood_OCw&ust=1675552679812000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjM7qO--vwCFQAAAAAdAAAAABAK",
  type:"Medical Drama",
  tags:["Medical", "Drama"]
    };
  }
  ngOnInit(): void {
  }

  imageText() {
    console.log("Image Url: " + this.content.imgURL + " id:" + this.content.id + " Title:" + this.content.title);
  }

}
