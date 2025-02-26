import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    standalone: true,
    imports: [RouterOutlet],
    template: `
            <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Agent Tops</h1>

        <router-outlet />
    `
})
export default class LearnPage {}