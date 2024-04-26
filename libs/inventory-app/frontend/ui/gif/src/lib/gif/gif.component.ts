import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from '@fabianrodriguez/shared/components/exports/export-components';

@Component({
  selector: 'fabian-rodriguez-workspace-gif',
  standalone: true,
  imports: [CommonModule, COMPONENTS],
  templateUrl: './gif.component.html',
  styleUrl: './gif.component.css',

})
export class GifComponent {}
