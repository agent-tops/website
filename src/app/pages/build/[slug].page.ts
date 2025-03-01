import { MarkdownComponent, injectContent, injectContentFiles } from "@analogjs/content";
import { AsyncPipe, NgIf } from "@angular/common";
import { Component } from "@angular/core";

import { BuildAttributes } from 'src/app/models/build-attributes';

@Component({
  imports: [MarkdownComponent, AsyncPipe, NgIf],
  template: `
    <div *ngIf="build$ | async as build">
            <h2>{{ build.attributes.title }}</h2>

            <analog-markdown [content]="build.content" />
    </div>
  `,
})
export default class BuildDetailsPageComponent {
  readonly build$ = injectContent<BuildAttributes>({
    param: "slug",
    subdirectory: "build"
  });
}