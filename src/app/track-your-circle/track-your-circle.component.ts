import { Component } from '@angular/core';

@Component({
  selector: 'app-track-your-circle',
  templateUrl: './track-your-circle.component.html',
  styleUrls: ['./track-your-circle.component.scss']
})


export class TrackYourCircleComponent {
  badgeId: string = '';
  circleFillPercentage: number = 0;

  // Method to handle the Find button click
  onFindBadge() {
    if (this.badgeId.trim() === '') {
      alert('Please enter a valid Badge Unique ID.');
      return;
    }

    // Simulate fetching percentage data (replace this with an actual API call)
    this.circleFillPercentage = Math.floor(Math.random() * 101); // Random percentage for demo

    console.log(`Tracking badge with ID: ${this.badgeId}`);
  }
}

