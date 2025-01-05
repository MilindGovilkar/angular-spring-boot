import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TrackYourCircleComponent } from './track-your-circle/track-your-circle.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { ContactUsComponent } from './contact-us/contact-us.component';  // Import ContactUsComponent

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'track-your-circle', component: TrackYourCircleComponent },
  { path: 'more-details', component: MoreDetailsComponent },
  { path: 'about-company', component: AboutCompanyComponent },
  { path: 'contact-us', component: ContactUsComponent }  // Define the route for ContactUsComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
