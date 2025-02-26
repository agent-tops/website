import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    standalone: true,
    imports: [RouterOutlet],
    template: `
         <div class="text-gray-100 text-[15px] mt-132 mb-32 max-w-7xl mx-auto">
        <div class="max-w-5xl mx-auto text-center relative px-4 sm:px-10 mt-16">
            <h1 class="lg:text-7xl md:text-6xl text-4xl font-semibold mb-6">Tools & Resources</h1>
            <h2 class="lg:text-3xl md:text-3xl text-2xl font-semibold mb-6 text-gray-400">Curated assets to streamline workflows.</h2>
                <router-outlet />
        </div>
    </div>
    `
})
export default class ToolPage {}