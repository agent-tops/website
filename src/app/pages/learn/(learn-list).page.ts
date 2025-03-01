import { Component } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

import { injectContentFiles } from '@analogjs/content';

import { LearnAttributes } from 'src/app/models';

@Component({
    standalone: true,
    imports: [NgFor, RouterLink, AsyncPipe],
    template: `
    <ul>
        <li *ngFor="let learn of learns">
            <a [routerLink]="['/learn', learn.slug]">{{ learn.attributes.title }}</a>
        </li>
    </ul>
    `
})
export default class BuildListComponent {
    readonly learns = injectContentFiles<LearnAttributes>((contentFile) =>
        contentFile.filename.includes('/src/content/learn'))
        .filter(item => item.attributes.published)
        .sort((item1, item2) => Date.parse(item2.attributes.publishedDate) - Date.parse(item1.attributes.publishedDate));
}

