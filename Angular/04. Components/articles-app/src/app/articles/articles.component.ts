import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleData } from '../../data/data';
import { ArticleComponent } from '../article/article.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, ArticlesComponent, ArticleComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent implements OnInit {
  articles!: Article[];

  constructor() {}

  ngOnInit() {
    this.articles = new ArticleData().getData();
  }
}
