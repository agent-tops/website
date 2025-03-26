import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import mermaid from 'mermaid';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
  styles: `
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
  `,
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {

    // Initialize with your theme configuration
    setTimeout(() => {
      mermaid.initialize({
        startOnLoad: false,
        'theme': 'dark',
        'themeVariables': {
          'primaryColor': '#BB2528',
          'primaryTextColor': '#fff',
          'primaryBorderColor': '#7C0000',
          'lineColor': '#F8B229',
          'secondaryColor': '#006100',
          'tertiaryColor': '#fff'
        }
      });// Re-initialize after data is rendered
    });
    
  }

}

