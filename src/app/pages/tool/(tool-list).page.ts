import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

import { injectContentFiles } from '@analogjs/content';
import { ToolAttributes } from 'src/app/models';

@Component({
    standalone: true,
    imports: [NgFor, RouterLink, AsyncPipe],
    template: `
    <ul>
        <li *ngFor="let tool of tools">
            <a [routerLink]="['/tool', tool.slug]">{{ tool.attributes.title }}</a>
        </li>
    </ul>
    `
})
export default class ToolListComponent {
    readonly tools = injectContentFiles<ToolAttributes>((contentFile) =>
        contentFile.filename.includes('/src/content/tool'))
        .filter(item => item.attributes.published)
        .sort((item1, item2) => Date.parse(item2.attributes.publishedDate) - Date.parse(item1.attributes.publishedDate));
}
