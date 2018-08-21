import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isShown = false;
  count = 0;
  title = 'app';
  showFilter() {
    this.count++;
    if (this.count % 2 !== 0) {
      this.isShown = true;
    } else if (this.count % 2 === 0) {
      this.isShown = false;
    }
  }
}
