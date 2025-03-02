import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'article-tile',
  imports: [DatePipe, RouterLink],
  template: `
    <div class="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 h-full dark:border-gray-700">
    <a [routerLink]="[basePath(), slug()]">
        <img class="rounded-t-lg w-full h-48 object-cover" [src]="image()" alt="" onerror="this.src='logo.svg'" />
    </a>
    <div class="p-5">
        <a [routerLink]="[basePath(), slug()]">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ title() }}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 h-full dark:text-gray-400">{{ description() }}</p>
        <a [routerLink]="[basePath(), slug()]" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
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




// <article
//       class="p-6 bg-white rounded-lg border border-gray-200 shadow-md h-full dark:bg-gray-800 dark:border-gray-700"
//     >
//       <div class="flex justify-between items-center mb-5 text-gray-500">
//         <span
//           class="bg-primary-100 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
//         >
//           <svg
//             class="mr-1 w-3 h-3"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
//               clip-rule="evenodd"
//             ></path>
//             <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
//           </svg>
//           {{ category() }}
//         </span>
//         <span class="text-sm text-blue-300">{{
//           publishedDate() | date : 'mediumDate'
//         }}</span>
//       </div>
//       <div>
//         <img
//           class="aspect-3/2 object-cover h-full"
//           [src]="image()"
//           onerror="this.src='logo.svg'"
//         />
//       </div>
//       <h2 class="mb-2 mt-2 text-2xl font-bold tracking-tight dark:text-white">
//         <a class="text-blue-300" [routerLink]="[basePath(), slug()]">
//           {{ title() }}</a
//         >
//       </h2>
//       <p class="mb-5 font-light text-gray-500 dark:text-gray-400 text-justify">
//         {{ description() }}
//       </p>
//       <div class="grow"></div>
//       <span class="text-white-300">
//         <a class="text-white" [routerLink]="[basePath(), slug()]">
//           Read More ...</a
//         ></span
//       >
//     </article>