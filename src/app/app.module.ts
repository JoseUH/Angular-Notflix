import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { MediaComponent } from './components/media/media.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavigatorComponent,
    MediaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
