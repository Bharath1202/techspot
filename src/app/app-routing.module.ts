import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicsComponent } from './admin/components/electronics/electronics.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { HomePageComponent } from './layout/home-page/home-page.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((x) => x.AuthModule),
  },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((x) => x.DashboardModule),
      },
      /** Admin Portal */
      {
        path:'admin',loadChildren:()=> import('./admin/admin.module').then(x=>x.AdminModule),
      },

      /**Admin Portal End */

      /** User Portal */
      {
        path: 'mobiles',
        loadChildren: () =>
          import('./mobiles/mobiles.module').then((x) => x.MobilesModule),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./cart/cart.module').then((x) => x.CartModule),
      },

      /** User Portal End */
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
