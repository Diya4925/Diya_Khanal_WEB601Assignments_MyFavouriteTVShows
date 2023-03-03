import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
<<<<<<< Updated upstream
=======

import { ContentListComponent } from './content-list/content-list.component';
import { FilterPipe } from './filter.pipe';
import { HoverAffectDirective } from './hover-affect.directive';

>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    ContentCardComponent
=======
    ContentCardComponent,
    ContentListComponent,
    FilterPipe,
    HoverAffectDirective

>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
