import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    // AppComponent,
    // CounterComponent
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule { }
