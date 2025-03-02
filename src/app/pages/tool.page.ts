import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  template: `
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2
            class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
          >
            Tools & Resources
          </h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Curated assets to streamline workflows.
          </p>
        </div>
        <router-outlet />
      </div>
    </section>
  `,
})
export default class ToolComponent {}
