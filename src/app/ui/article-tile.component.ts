import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'article-tile',
  imports: [RouterLink],
  template: `
  <a [routerLink]="[ basePath(), slug() ]" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg w-64 m-5 md:h-auto md:w-32 md:rounded-none md:rounded-s-lg" src="{{ image() }}" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ title() }}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-100">{{ description() }}</p>
    </div>
</a>
  `,
})
export default class ArticleTileComponent {
  category = input<string>();
  publishedDate = input<string>();
  title = input<string>();
  basePath = input<string>();
  slug = input<string>();
  description = input<string>();
  image = input<string>();
}
