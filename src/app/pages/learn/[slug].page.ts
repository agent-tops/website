import { MarkdownComponent, injectContent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { LearnAttributes } from '../../models/learn-attributes';

@Component({
  imports: [MarkdownComponent, NgIf, AsyncPipe],
  template: `
    <div *ngIf="learn$ | async as learn">
      <img class="rounded-lg mx-auto h-128 mb-12" [src]="learn.attributes.image" alt="image description">
      <h2 class="md:text-3xl text-2xl font-semibold md:!leading-[50px] mb-6">{{ learn.attributes.title }}</h2>
      <analog-markdown class="prose dark:prose-invert text-left" [content]="learn.content" />
    </div>
  `,
})
export default class LearnArticlePageComponent {
  readonly learn$ = injectContent<LearnAttributes>({
    param: 'slug',
    subdirectory: 'learn',
  });
}
