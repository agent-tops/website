import { MarkdownComponent, injectContent } from "@analogjs/content";
import { AsyncPipe, NgIf } from "@angular/common";
import { Component } from "@angular/core";

import { Build } from 'src/app/models/build';

@Component({
    standalone: true,
    imports: [MarkdownComponent, NgIf, AsyncPipe],
    template: `
    <div *ngIf="build$ | async as build">
            <h2>{{ build.attributes.title }}</h2>

            <analog-markdown [content]="build.content" />
    </div>
    `
})
export default class BuildPage {
    build$ = injectContent<Build>();
}