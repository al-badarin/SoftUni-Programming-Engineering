import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css'],
})
export class NewThemeComponent {
  newThemeSubmitHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    console.log(form.value);
  }

  constructor(private apiService: ApiService) {}

  addTheme(ev: Event, themeName: string, postText: string) {
    ev.preventDefault();
    console.log({ themeName, postText });

    this.apiService.createTheme(themeName, postText).subscribe((data) => {
      console.log({ data });
    });
  }
}
