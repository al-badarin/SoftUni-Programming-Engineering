import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts: Post[] | null = [];
  isLoading: boolean = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // this.api.getPosts(5).subscribe((posts) => {
    //   console.log(posts);
    //   this.posts = posts;
    //   this.isLoading = false;
    // });

    this.api.getPosts(5).subscribe({
      next: (posts) => {
        console.log(posts);
        this.posts = posts;
        this.isLoading = false;
      },

      error: (err) => {
        this.isLoading = false;
        console.error('Error: ', err);
      },
    });
  }
}
