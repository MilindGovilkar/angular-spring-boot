import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',  // Correct the file name here
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    // Add or remove 'active' class for the nav links
    const navLinks = document.querySelector('.nav-links');
    if (this.isMenuOpen) {
      navLinks?.classList.add('active');
    } else {
      navLinks?.classList.remove('active');
    }
  }
}


