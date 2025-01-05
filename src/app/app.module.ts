import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TrackYourCircleComponent } from './track-your-circle/track-your-circle.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { ContactUsComponent } from './contact-us/contact-us.component';  // Add this line

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    TrackYourCircleComponent,
    MoreDetailsComponent,
    AboutCompanyComponent,
    ContactUsComponent  // Add this line
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  // Import HttpClientModule here
    FormsModule  // Import FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
