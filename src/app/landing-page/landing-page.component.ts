import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent {
  showPopup: boolean = false;
  showSuccess: boolean = false;
  showError: boolean = false;
  badgeId: string = '';

  user = {
    name: '',
    phone: '',
    email: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  openPopup() {
    this.showPopup = true;
    this.showError = false;
    this.showSuccess = false;
    document.body.classList.add('popup-open');
  }

  closePopup() {
    this.showPopup = false;
    this.showError = false;
    document.body.classList.remove('popup-open');
  }

  onBuyNow() {
    if (this.user.name && this.user.phone) {
      if (this.user.name && this.user.phone) {
        // Simulating a successful payment and badge ID
        this.badgeId = Math.floor(Math.random() * 1000).toString(); // You can set this to any mock ID
        this.showPopup = false;
        //this.showSuccess = true;
        this.showError = true;
        document.body.classList.remove('popup-open'); // Remove blur effect
      }
      // this.http.post('https://your-backend-api-url/buy-badge', this.user).subscribe(
      //   (response: any) => {
      //     this.badgeId = response.badgeId || '12345'; // Use actual badgeId from response
      //     this.showPopup = false;
      //     this.showSuccess = true;
      //     document.body.classList.remove('popup-open');
      //   },
      //   error => {
      //     console.error('Error processing payment:', error);
      //     this.showError = true;
      //     document.body.classList.remove('popup-open');
      //   }
      // );
    }
  }

  redirectToTrack() {
    this.showSuccess = false;
    this.router.navigate(['/track-your-circle']);
  }
}
