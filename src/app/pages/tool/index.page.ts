import { Component } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { injectContentFiles } from '@analogjs/content';
import { RouterLink } from '@angular/router';

import { Tool } from 'src/app/models/tool';

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
    <h2>TOOLS - Coming soon</h2>

    <ul>
        <li *ngFor="let tool of tools">
            <a [routerLink]="['/tool', tool.slug]">{{ tool.attributes.title }}</a>
        </li>
    </ul>
    `
})
export default class IndexPage {
    readonly tools = injectContentFiles<Tool>((contentFile) =>
        contentFile.filename.includes('/src/content/tool/'),
      );
}

