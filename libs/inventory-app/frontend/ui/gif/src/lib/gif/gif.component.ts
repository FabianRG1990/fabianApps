import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '@fabian-rodriguez-workspace/shared';

@Component({
  selector: 'fabian-rodriguez-workspace-gif',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './gif.component.html',
  styleUrl: './gif.component.css',
})
export class GifComponent {}
