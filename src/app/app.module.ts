import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LowerDataComponent } from './lower-data/lower-data.component';
import { UpperDataComponent } from './upper-data/upper-data.component';

@NgModule({
  declarations: [
    AppComponent,
    LowerDataComponent,
    UpperDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
