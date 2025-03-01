import { MarkdownComponent, injectContent, injectContentFiles } from "@analogjs/content";
import { AsyncPipe, NgIf } from "@angular/common";
import { Component } from "@angular/core";

import { LearnAttributes } from 'src/app/models/learn-attributes';

@Component({
    standalone: true,
    imports: [MarkdownComponent, NgIf, AsyncPipe],
    template: `
    <div *ngIf="learn$ | async as learn">
            <h2>{{ learn.attributes.title }}</h2>

            <analog-markdown [content]="learn.content" />
    </div>
    `
})
export default class LearnDetailsPageComponent {
  readonly learn$ = injectContent<LearnAttributes>({
    param: "slug",
    subdirectory: "learn"
  });
}