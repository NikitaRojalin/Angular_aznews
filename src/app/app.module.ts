import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { TrendingbodyComponent } from './trendingbody/trendingbody.component';
import { WeeklynewsComponent } from './weeklynews/weeklynews.component';
import { WhatsnewComponent } from './whatsnew/whatsnew.component';
import { WeeklytopComponent } from './weeklytop/weeklytop.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { RecarticleComponent } from './recarticle/recarticle.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { IndmainComponent } from './indmain/indmain.component';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';
import { LatestnewsComponent } from './latestnews/latestnews.component';
import { ContactComponent } from './contact/contact.component';
import { ElementComponent } from './element/element.component';
import { BlogComponent } from './blog/blog.component';
import { SingleblogComponent } from './singleblog/singleblog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    TrendingbodyComponent,
    WeeklynewsComponent,
    WhatsnewComponent,
    WeeklytopComponent,
    YoutubeComponent,
    RecarticleComponent,
    FooterComponent,
    DetailsComponent,
    IndmainComponent,
    CategoryComponent,
    AboutComponent,
    LatestnewsComponent,
    ContactComponent,
    ElementComponent,
    BlogComponent,
    SingleblogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
