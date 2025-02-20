import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'index.page.html'
})
export default class HomeComponent {
  count = signal(0);

  increment() {
    this.count.update((count) => count + 1);
  }
}