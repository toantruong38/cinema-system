
import { TicketBookingInformationComponent } from './ticket-booking-information/ticket-booking-information.component';
import { PositionSelectorComponent } from './position-selector/position-selector.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    PositionSelectorComponent,
    TicketBookingInformationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }

