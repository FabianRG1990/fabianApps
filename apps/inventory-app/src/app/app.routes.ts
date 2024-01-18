import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@inventory-app/landing').then((r) => r.routes),
  },
];
