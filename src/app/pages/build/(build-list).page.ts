import { Component } from '@angular/core';
import { AsyncPipe, DatePipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

import { injectContentFiles } from '@analogjs/content';
import { BuildAttributes } from 'src/app/models';
import ArticleTileComponent from '../../ui/article-tile.component';

@Component({
  imports: [NgFor, RouterLink, AsyncPipe, DatePipe, ArticleTileComponent],
  template: `
    @if (buildArticles.length > 0) {
    <div class="grid gap-8 lg:grid-cols-3">
      @for (buildArticle of buildArticles; track buildArticle) {
      <article-tile
        category="Build"
        [publishedDate]="buildArticle.attributes.publishedDate"
        [title]="buildArticle.attributes.title"
        basePath="/build"
        [slug]="buildArticle.attributes.slug"
        [description]="buildArticle.attributes.description"
      />
      }
    </div>
    } @else {
    <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
      <h2
        class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
      >
        Coming soon ...
      </h2>
    </div>
    }
  `,
})
export default class BuildArticleListComponent {
  readonly buildArticles = injectContentFiles<BuildAttributes>((contentFile) =>
    contentFile.filename.includes('/src/content/build')
  )
    .filter((buildArticle) => buildArticle.attributes.published)
    .sort(
      (buildArticle1, buildArticle2) =>
        Date.parse(buildArticle2.attributes.publishedDate) -
        Date.parse(buildArticle1.attributes.publishedDate)
    );
}
