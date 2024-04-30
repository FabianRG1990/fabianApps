import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@fabian-rodriguez-workspace/gif').then((r) => r.routes),
  },
];




