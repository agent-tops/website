import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';
import { BuildAttributes } from 'src/app/models';

@Component({
    standalone: true,
    imports: [NgFor, RouterLink, AsyncPipe],
    template: `
    <ul>
        <li *ngFor="let build of builds">
            <a [routerLink]="['/build', build.slug]">{{ build.attributes.title }}</a>
        </li>
    </ul>
    `
})
export default class BuildListComponent {
    readonly builds = injectContentFiles<BuildAttributes>((contentFile) =>
        contentFile.filename.includes('/src/content/build'))
        .filter(item => item.attributes.published)
        .sort((item1, item2) => Date.parse(item2.attributes.publishedDate) - Date.parse(item1.attributes.publishedDate));
}

