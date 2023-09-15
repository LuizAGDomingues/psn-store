import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { CardLabelComponent } from './components/game-card/card-label/card-label.component';
import { CardPricingComponent } from './components/game-card/card-pricing/card-pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    GameCardComponent,
    CardLabelComponent,
    CardPricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
