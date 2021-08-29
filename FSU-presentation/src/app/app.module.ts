import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropperComponent } from './peek-a-boo/dropper/dropper.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { LoremIpsumComponent } from './lorem-ipsum/lorem-ipsum.component';
import { MatDividerModule } from '@angular/material/divider';
import { PeekComponent } from './peek-a-boo/peek-a-boo.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    DropperComponent,
    HeaderComponent,
    HeroComponent,
    LoremIpsumComponent,
    PeekComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
