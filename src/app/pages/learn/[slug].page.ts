import { MarkdownComponent, injectContent } from "@analogjs/content";
import { AsyncPipe, NgIf } from "@angular/common";
import { Component } from "@angular/core";

import { Learn } from 'src/app/models/learn';

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
export default class BlogPostPage {
    learn$ = injectContent<Learn>();
}