import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SatyaPipe } from './satya.pipe';
import { SubPipe } from './sub.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SatyaPipe,
    SubPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
