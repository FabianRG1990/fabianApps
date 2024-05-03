import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from '@fabianrodriguez/shared/components/exports/export-components';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'fabian-rodriguez-workspace-gif',
  standalone: true,
  imports: [CommonModule, COMPONENTS, MatButtonModule],
  templateUrl: './gif.component.html',
  styleUrl: './gif.component.scss',

})
export class GifComponent {}
