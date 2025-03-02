import { Component } from '@angular/core';

import { injectContentFiles } from '@analogjs/content';
import { ToolAttributes } from 'src/app/models';
import ArticleTileComponent from '../../ui/article-tile.component';

@Component({
  imports: [ArticleTileComponent],
  template: `
    @if (toolArticles.length > 0) {
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      @for (toolArticle of toolArticles; track toolArticle) {
      <article-tile
        category="Tools & Resources"
        [publishedDate]="toolArticle.attributes.publishedDate"
        [title]="toolArticle.attributes.title"
        basePath="/tool"
        [slug]="toolArticle.attributes.slug"
        [description]="toolArticle.attributes.description"
        [image]="toolArticle.attributes.image"
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
export default class ToolArticleListComponent {
  readonly toolArticles = injectContentFiles<ToolAttributes>((contentFile) =>
    contentFile.filename.includes('/src/content/tool')
  )
    .filter((toolArticle) => toolArticle.attributes.published)
    .sort(
      (toolArticle1, toolArticle2) =>
        Date.parse(toolArticle2.attributes.publishedDate) -
        Date.parse(toolArticle1.attributes.publishedDate)
    );
}
