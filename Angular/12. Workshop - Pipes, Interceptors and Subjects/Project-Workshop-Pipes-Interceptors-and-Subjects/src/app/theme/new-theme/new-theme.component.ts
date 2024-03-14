import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css'],
})
export class NewThemeComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  newThemeSubmitHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    // console.log(form.value);
    const { themeName, postText } = form.value;
    this.apiService.createTheme(themeName, postText).subscribe(() => {
      this.router.navigate(['/themes']);
    });
  }

  // addTheme(ev: Event, themeName: string, postText: string) {
  //   ev.preventDefault();
  //   console.log({ themeName, postText });

  //   this.apiService.createTheme(themeName, postText).subscribe((data) => {
  //     console.log({ data });
  //   });
  // }
}
