import { MarkdownComponent, injectContent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { ToolAttributes } from '../../models/tool-attributes';

@Component({
  imports: [MarkdownComponent, NgIf, AsyncPipe],
  template: `
     <div *ngIf="tool$ | async as tool">
      <img class="rounded-lg mx-auto h-128 mb-12" [src]="tool.attributes.image" alt="image description">
      <h2 class="md:text-3xl text-2xl font-semibold md:!leading-[50px] mb-6">{{ tool.attributes.title }}</h2>
      <analog-markdown class="prose dark:prose-invert text-left" [content]="tool.content" />
    </div>
  `,
})
export default class ToolArticlePageComponent {
  readonly tool$ = injectContent<ToolAttributes>({
    param: 'slug',
    subdirectory: 'tool',
  });
}
