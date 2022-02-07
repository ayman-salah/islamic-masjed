import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MynavComponent } from './layouts/mynav/mynav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SermonComponent } from './components/sermon/sermon.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';



const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'aboutUs' , component: AboutUsComponent},
  {path:'sermon' , component: SermonComponent},
  {path:'blog' , component: BlogComponent},
  {path:'contactUs' , component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
