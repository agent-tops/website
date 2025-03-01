import { MarkdownComponent, injectContent } from "@analogjs/content";
import { AsyncPipe, NgIf } from "@angular/common";
import { Component } from "@angular/core";

import { ToolAttributes } from '../../models/tool-attributes';

@Component({
    standalone: true,
    imports: [MarkdownComponent, NgIf, AsyncPipe],
    template: `
    <div *ngIf="tool$ | async as tool">
            <h2>{{ tool.attributes.title }}</h2>

            <analog-markdown [content]="tool.content" />
    </div>
    `
})
export default class ToolDetailsPageComponent {
  readonly tool$ = injectContent<ToolAttributes>({
    param: "slug",
    subdirectory: "tool"
  });
}