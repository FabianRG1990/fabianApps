import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'inventory-app-shared',
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedComponent {}
