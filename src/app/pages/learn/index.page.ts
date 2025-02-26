import { Component } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { injectContent, injectContentFiles } from '@analogjs/content';
import { RouterLink } from '@angular/router';

import { Learn } from 'src/app/models/learn';

@Component({
    standalone: true,
    imports: [NgFor, RouterLink, AsyncPipe],
    template: `
        <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <h2>LEARN - Coming soon</h2>

    <ul>
        <li *ngFor="let learn of learns">
            <a [routerLink]="['/learn', learn.slug]">{{ learn.attributes.title }}</a>
        </li>
    </ul>
    `
})
export default class IndexPage {
    readonly learns = injectContentFiles<Learn>((contentFile) =>
            contentFile.filename.includes('/src/content/learn/'),
          );
}


