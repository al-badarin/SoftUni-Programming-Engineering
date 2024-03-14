import { Component } from '@angular/core';
import {
  // AbstractControl,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  // @ViewChild('registerForm') registerForm!: NgForm;

  userData = {
    fullName: '',
    email: '',
    phoneNumber: '',
    passwords: {
      password: '',
      confirmPassword: '',
    },
  };

  telCodes: string[] = ['+359', '+1', '+44']; // Example options for the telephone code
  buildings: string[] = ['Designer', 'Developer', 'Tester']; // Example options for the building

  // Form Group
  registerForm: FormGroup | undefined;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      fullName: [
        '',
        [
          Validators.required,
          Validators.pattern('^[A-Z][a-zA-Z]+ [A-Z][a-zA-Z]+$'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
      passwords: this.fb.group(
        {
          password: [
            '',
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(16),
              Validators.pattern('^[a-zA-Z0-9]+$'),
            ],
          ],
          confirmPassword: [
            '',
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(16),
              Validators.pattern('^[a-zA-Z0-9]+$'),
            ],
          ],
        },
        { validators: this.passwordMatchValidator }
      ),
    });
  }

  // Custom Validator Function
  passwordMatchValidator(group: FormGroup) {
    console.log('Validating passwords...');
    
    const passwordControl = group.get('password');
    const confirmPasswordControl = group.get('confirmPassword');

    console.log('Password:', passwordControl!.value);
    console.log('Confirm Password:', confirmPasswordControl!.value);

    if (passwordControl && confirmPasswordControl) {
      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
        console.log('Passwords do not match.');
      } else {
        confirmPasswordControl.setErrors(null);
        console.log('Passwords match.');
      }
    }
  }

  // Submit Handler
  onSubmitHandler() {
    if (this.registerForm!.valid) {
      // Form is valid, perform form submission logic here
      console.log('Form submitted successfully!');
      
      // Reset form after submission
      this.registerForm!.reset();

      // You can also access form values using this.userData
      // For example: console.log(this.userData);
    } else {
      // Form is invalid, show error messages
      console.log('Form is invalid! Please check the fields.');
    }
  }
}
