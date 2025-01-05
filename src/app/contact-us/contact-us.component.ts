import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  // Contact form model
  contact = {
    name: '',
    phone: '',
    email: '',
    badgeId: '',
    query: '',
  };

  formSubmitted: boolean = false; // Flag for success message
  showError: boolean = false; // Flag for error message
  errorMessage: string = ''; // Detailed error message

  constructor(private http: HttpClient) {}

  /**
   * Submits the contact form.
   */
  onSubmit() {
    // Validate required fields
    if (!this.contact.name || !this.contact.phone) {
      this.showError = true;
      this.errorMessage = 'Name and Phone are required fields!';
      return;
    }

    // Backend API URL
    const apiUrl = 'http://localhost:9090/api/v1/contact';

    // Send POST request to the backend
    this.http.post(apiUrl, this.contact).subscribe(
      (response) => {
        console.log('Form submitted successfully:', response);
        this.formSubmitted = true; // Show success message
        this.showError = false; // Hide error message
      },
      (error) => {
        console.error('Error occurred during form submission:', error);
        this.showError = true; // Show error message
        this.formSubmitted = false; // Hide success message

        // Set error message based on response
        if (error.status === 0) {
          this.errorMessage = 'Cannot connect to the backend. Please check your internet connection.';
        } else if (error.status >= 400 && error.status < 500) {
          this.errorMessage = 'Client error. Please check the entered data.';
        } else if (error.status >= 500) {
          this.errorMessage = 'Server error. Please try again later.';
        } else {
          this.errorMessage = 'Unexpected error. Please try again.';
        }
      }
    );
  }

  /**
   * Resets the form and flags to return to the contact form.
   */
  goBack() {
    this.formSubmitted = false;
    this.showError = false;
    this.errorMessage = '';
    this.contact = { name: '', phone: '', email: '', badgeId: '', query: '' }; // Reset contact object
  }
}
