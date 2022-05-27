import { HttpServiceService } from './services/httpService.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AttractComponent } from './attract/attract.component';
import { SetImageDirective } from './directives/set-image.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { SortCatComponent } from './sort-cat/sort-cat.component';
import { FavService } from './services/fav.service';
import { FooterComponent } from './footer/footer.component';
import { ScrollbuttComponent } from './scrollbutt/scrollbutt.component';
import { AttractblockComponent } from './attractblock/attractblock.component';

@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
    AttractComponent,
    FooterComponent,
    SetImageDirective,
    FilterPipe,
    SortCatComponent,
    ScrollbuttComponent,
      AttractblockComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FavService,HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
