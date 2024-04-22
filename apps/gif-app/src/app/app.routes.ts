import { Route } from '@angular/router';
import { GifComponent } from '@fabian-rodriguez-workspace/gif';

export const appRoutes: Route[] = [
  {
    path: '', component: GifComponent,
    loadChildren: () => import('@fabian-rodriguez-workspace/gif').then((r) => r.routes),
  },
];




