import { Component } from '@angular/core';
import { Content } from  './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'D_Khanal_MyFavouriteTVShows';

contentItem:Content = {

  id:1,
  title:"The Grey's Anatomy",
  description:"One of the longest running show which is based on medicine.",
  creator:"Shonda Rimes",
  imgURL:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpagesix.com%2F2020%2F03%2F27%2Fwhere-the-original-greys-anatomy-cast-is-today%2F&psig=AOvVaw00a9FRsnpUL3Vvnood_OCw&ust=1675552679812000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjM7qO--vwCFQAAAAAdAAAAABAK",
  type:"Medical Drama",
  tags: ["Medical", "Drama"]

};

contentItem2:Content ={
  id:2,
  title:"Jane the virgin",
  description:"This series is a spanish based American TV show which shows how a virgin lady gets accidently inseminated with the sperm of a rich hot man who just recovered from cancer.",
  creator:"Perla Farías",
  imgURL:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt3566726%2F&psig=AOvVaw1qvlSaLl9HayUZmdxtcJGn&ust=1675552855900000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJiu9ve--vwCFQAAAAAdAAAAABAE",
  type:"Drama/Comedy",
  tags: ["Telenovela", "Drama"]

};

contentItem3:Content={

  id:3,
  title:"The vampire Dairies",
  description:"This amerian tv show is based on the the vampires.",
  creator:"Julie Plecks",
  imgURL:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.primevideo.com%2Fdetail%2FThe-Vampire-Diaries%2F0HG2QOPONEONZPP2ZXNMA6M8Q7&psig=AOvVaw14-7mZ3M4LM8asoIB_Mx-o&ust=1675552966964000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjd86y_-vwCFQAAAAAdAAAAABAE",
  type:"Romance/Fiction",
  tags: ["Vampire", "Romance"]
};

contentItem4:Content={

  id:4,
  title:"FRIENDS",
  description:"The most popular SitCom of all time.",
  creator:"David Crane",
  imgURL:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0108778%2F&psig=AOvVaw2GTRJzX68o2rM-DOaQD7RY&ust=1676153482557000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCICR2Lr8i_0CFQAAAAAdAAAAABAD",
  type:"Romance/Comedy",
  tags: ["Comedy", "Friendship"]
};

contentItem5:Content={

  id:5,
  title:"Money Heist",
  description:"A spanish heist crime drama television series.",
  creator:"Alex Pina",
  imgURL:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fnetflix.fandom.com%2Fwiki%2FMoney_Heist&psig=AOvVaw38rgboLHP6d79vjNWsGYuB&ust=1676153622061000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPjk5vv8i_0CFQAAAAAdAAAAABAD",
  type:"Romance/Fiction",
  tags: ["Heist", "Crime"]
};

contentArray: Content[];
  constructor(){
    this.contentArray = [this.contentItem];

    this.contentArray.push(this.contentItem2);
    this.contentArray.push(this.contentItem3);
    this.contentArray.push(this.contentItem4);
    this.contentArray.push(this.contentItem5);
  }


}
