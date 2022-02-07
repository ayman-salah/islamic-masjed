import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MynavComponent } from './layouts/mynav/mynav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SermonComponent } from './components/sermon/sermon.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeHeaderComponent } from './components/home/home_parts/home-header/home-header.component';
import { FeaturesComponent } from './components/home/home_parts/features/features.component';
import { LoveComponent } from './components/home/home_parts/love/love.component';
import { BenefitsComponent } from './components/home/home_parts/benefits/benefits.component';
import { JoinUsComponent } from './components/home/home_parts/join-us/join-us.component';
import { ServeComponent } from './components/home/home_parts/serve/serve.component';
import { InspireComponent } from './components/home/home_parts/inspire/inspire.component';
import { FooterComponent } from './layouts/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    MynavComponent,
    HomeComponent,
    AboutUsComponent,
    SermonComponent,
    BlogComponent,
    ContactUsComponent,
    HomeHeaderComponent,
    FeaturesComponent,
    LoveComponent,
    BenefitsComponent,
    JoinUsComponent,
    ServeComponent,
    InspireComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
