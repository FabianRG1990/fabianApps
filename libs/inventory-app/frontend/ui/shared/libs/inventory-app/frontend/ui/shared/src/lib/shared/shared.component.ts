import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fabian-rodriguez-workspace-shared',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedComponent {}
