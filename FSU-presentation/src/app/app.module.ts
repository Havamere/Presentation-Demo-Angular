import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreatePostComponent } from './form/create-post/create-post.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { LoremIpsumComponent } from './lorem-ipsum/lorem-ipsum.component';
import { PostListComponent } from './form/post-list/post-list.component';
import { RandomFactComponent } from './random-fact/random-fact-componnent';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    FooterComponent,
    FormComponent,
    HeaderComponent,
    HeroComponent,
    LoremIpsumComponent,
    PostListComponent,
    RandomFactComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
