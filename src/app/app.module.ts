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
import { AboutHeaderComponent } from './components/about-us/aboutParts/about-header/about-header.component';
import { AboutInfoComponent } from './components/about-us/aboutParts/about-info/about-info.component';
import { AboutBenefitsComponent } from './components/about-us/aboutParts/about-benefits/about-benefits.component';
import { AboutMembersComponent } from './components/about-us/aboutParts/about-members/about-members.component';
import { SermonHeaderComponent } from './components/sermon/sermon_parts/sermon-header/sermon-header.component';
import { SermonEventsComponent } from './components/sermon/sermon_parts/sermon-events/sermon-events.component';
import { SermonTrustComponent } from './components/sermon/sermon_parts/sermon-trust/sermon-trust.component';
import { RecentPostComponent } from './components/blog/blogparts/recent-post/recent-post.component';
import { AllBlogPostsComponent } from './components/blog/blogparts/all-blog-posts/all-blog-posts.component';
import { ContactHeaderComponent } from './components/contact-us/contactParts/contact-header/contact-header.component';
import { ContactFormsComponent } from './components/contact-us/contactParts/contact-forms/contact-forms.component';
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
    AboutHeaderComponent,
    AboutInfoComponent,
    AboutBenefitsComponent,
    AboutMembersComponent,
    SermonHeaderComponent,
    SermonEventsComponent,
    SermonTrustComponent,
    RecentPostComponent,
    AllBlogPostsComponent,
    ContactHeaderComponent,
    ContactFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
