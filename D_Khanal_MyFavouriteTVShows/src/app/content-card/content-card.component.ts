import { Component, OnInit } from '@angular/core';
import{ ContentList } from '../helper-files/content-list';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

TVShows:Content={
  id:1,
  title:"The Grey's Anatomy",
  description:"One of the longest running show which is based on medicine.",
  creator:"Shonda Rimes",
  imgURL:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpagesix.com%2F2020%2F03%2F27%2Fwhere-the-original-greys-anatomy-cast-is-today%2F&psig=AOvVaw00a9FRsnpUL3Vvnood_OCw&ust=1675552679812000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjM7qO--vwCFQAAAAAdAAAAABAK",
  type:"Medical Drama"

}
TVShows1:Content={
  id:2,
  title:"Jane the virgin",
  description:"This series is a spanish based American TV show which shows how a virgin lady gets accidently inseminated with the sperm of a rich hot man who just recovered from cancer.",
  creator:"Perla Farías",
  imgURL:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt3566726%2F&psig=AOvVaw1qvlSaLl9HayUZmdxtcJGn&ust=1675552855900000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJiu9ve--vwCFQAAAAAdAAAAABAE",
  type:"Drama/Comedy"

}
TVShows2:Content={
  id:3,
  title:"The vampire Dairies",
  description:"This amerian tv show is based on the the vampires.",
  creator:"Julie Plecks",
  imgURL:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.primevideo.com%2Fdetail%2FThe-Vampire-Diaries%2F0HG2QOPONEONZPP2ZXNMA6M8Q7&psig=AOvVaw14-7mZ3M4LM8asoIB_Mx-o&ust=1675552966964000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjd86y_-vwCFQAAAAAdAAAAABAE",
  type:"Romance/Fiction"

}

MyTVShows = new ContentList(this.TVShows);
contentList = this.MyTVShows.getitems();
constructor(){
  this.MyTVShows.addContent(this.TVShows);
  this.MyTVShows.addContent(this.TVShows1);
  this.MyTVShows.addContent(this.TVShows2);

}
ngOnInit(): void{
  const div = document.getElementById('MyTVShows');
  console.log(div);
  if(div){
    div.innerHTML += this.MyTVShows.printProperties(0);
    div.innerHTML += this.MyTVShows.printProperties(1);
    div.innerHTML += this.MyTVShows.printProperties(2);

  }
}

}

