import { Component } from '@angular/core';
import { AsyncPipe, DatePipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

import { injectContentFiles } from '@analogjs/content';
import { LearnAttributes } from 'src/app/models';
import ArticleTileComponent from '../../ui/article-tile.component';

@Component({
  imports: [NgFor, RouterLink, AsyncPipe, DatePipe, ArticleTileComponent],
  template: `
    @if (learnArticles.length > 0) {
    <div class="grid gap-8 lg:grid-cols-3">
      @for (learnArticle of learnArticles; track learnArticle) {
      <article-tile
        category="Learn"
        [publishedDate]="learnArticle.attributes.publishedDate"
        [title]="learnArticle.attributes.title"
        basePath="/learn"
        [slug]="learnArticle.attributes.slug"
        [description]="learnArticle.attributes.description"
        [image]="learnArticle.attributes.image"
      />
      }
    </div>
    } @else {
    <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
      <h2
        class="mb-4 text-xl lg:text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white"
      >
        Coming soon ...
      </h2>
    </div>
    }
  `,
})
export default class LearnArticleListComponent {
  readonly learnArticles = injectContentFiles<LearnAttributes>((contentFile) =>
    contentFile.filename.includes('/src/content/learn')
  )
    .filter((learnArticle) => learnArticle.attributes.published)
    .sort(
      (learnArticle1, learnArticle2) =>
        Date.parse(learnArticle2.attributes.publishedDate) -
        Date.parse(learnArticle1.attributes.publishedDate)
    );
}
