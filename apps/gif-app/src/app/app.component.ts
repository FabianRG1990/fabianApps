import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  template: `<router-outlet/>`,
  selector: 'fabian-rodriguez-workspace-root',
  styleUrl: './app.component.scss',
  imports: [ RouterModule],
})
export class AppComponent {
  title = 'gif-app';
}
