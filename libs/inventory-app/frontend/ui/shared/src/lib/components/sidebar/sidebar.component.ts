import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MODULES } from '../exports/export-modues';

@Component({
  standalone: true,
  selector: 'fabian-rodriguez-workspace-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MODULES],
})
export class SidebarComponent {}


