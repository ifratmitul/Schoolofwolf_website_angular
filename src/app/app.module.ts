import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AwardsComponent } from './awards/awards.component';
import { PlayersComponent } from './players/players.component';
import { FooterComponent } from './footer/footer.component';
import { PlayerItemComponent } from './players/player-item/player-item.component';
import { FoudersComponent } from './fouders/fouders.component';
import { AwardListComponent } from './awards/award-list/award-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AwardsComponent,
    PlayersComponent,
    FooterComponent,
    PlayerItemComponent,
    FoudersComponent,
    AwardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
