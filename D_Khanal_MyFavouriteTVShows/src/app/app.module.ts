import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 


import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
<<<<<<< Updated upstream
=======
import { CreateContentComponent } from './create-content/create-content.component';
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
    HoverAffectDirective,
    CreateContentComponent,
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
