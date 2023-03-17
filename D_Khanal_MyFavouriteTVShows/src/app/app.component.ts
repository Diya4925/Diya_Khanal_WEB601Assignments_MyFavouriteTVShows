import { Component } from '@angular/core';
import { TvshowsserviceService } from './tvshowsservice.service';
import { MessageService } from './message.service';
import { of } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  playerId!: number;
  
  constructor(private Tvshowsservice: TvshowsserviceService,private messageservice: MessageService){}

     getClickedSport(playerId:number) {

      if (isNaN(this.playerId)) {
        this.messageservice.add('Please enter a valid number.');
        return;
      }
      
      const contentCardArrayLength = this.Tvshowsservice.getcontentCardArrayLength();
      if (this.playerId < 0 || this.playerId >= contentCardArrayLength) {
        this.messageservice.add('The entered id number is outside the bounds of the ContentCard array.');
        return;
      }

       

      try {
        const ClickedCard = this.Tvshowsservice.getClickedTvshowCard(playerId);
        this.messageservice.add("Content card Retrieved"+ClickedCard);
        return;
        
      } catch (error) {
        this.messageservice.add('An error occurred: ');
      }
    } 
}