import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { CONTENT } from './helper-files/contentDB';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TvshowsserviceService {

  getcontentCardArrayLength: any;
  constructor(private messageservice: MessageService) { }
  
  getFavouriteTvshows(): Observable<Content[]> {
    const tvshows = of(CONTENT)
    this.messageservice.add('content array loaded!');
    return tvshows;
  }
  getSpecificTvshow(id : number): Observable<Content[]>{
    const tvshow = CONTENT.filter(obj=>obj.id == id);
    this.messageservice.add('Content item at :' + id )
    return of(tvshow)
  }


  getClickedTvshowCard(playerId:number){
    const ClickedTvshow = CONTENT.filter(obj => obj.id == playerId);
    this.messageservice.add("Sports Card Retrieved at id" + playerId)
    return of(ClickedTvshow)
  }

 
}