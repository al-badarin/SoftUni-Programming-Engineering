import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css'],
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] | null = [];
  isLoading: boolean = true;

  constructor(private api: ApiService, private userService: UserService) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get userId(): string {
    return this.userService.user?.id || '';
  }

  ngOnInit(): void {
    // this.api.getThemes().subscribe((themes) => {
    //   console.log(themes);
    //   this.themes = themes;
    //   this.isLoading = false;
    // });

    this.api.getThemes().subscribe({
      next: (themes) => {
        console.log('themes: ', themes);
        this.themes = themes;
        this.isLoading = false;
      },

      error: (err) => {
        this.isLoading = false;
        console.error('Error: ', err);
      },
    });
  }

  isSubscribed(theme: Theme) {
    const isSubscribedUser = theme.subscribers.find((s) => {
      return s === this.userService.user?.id;
    });
    return !!isSubscribedUser;
  }
}
