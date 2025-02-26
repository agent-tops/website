import { Component } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { injectContentFiles } from '@analogjs/content';
import { RouterLink } from '@angular/router';

import { Build } from 'src/app/models/build';

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
    <h2>BUILD - Coming soon</h2>

    <ul>
        <li *ngFor="let build of builds">
            <a [routerLink]="['/build', build.slug]">{{ build.attributes.title }}</a>
        </li>
    </ul>
    `
})
export default class IndexPage {
    readonly builds = injectContentFiles<Build>((contentFile) =>
            contentFile.filename.includes('/src/content/build/'),
          );
}

