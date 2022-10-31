import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/helpers/auth.guard';
import { HomePageComponent } from './layout/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((x) => x.AuthModule),
  },
  {
    path: 'home',
    component: HomePageComponent, canActivate: [AuthGuard],
    children: [
      /** Admin Portal */
      {
        path: 'admin', loadChildren: () => import('./admin/admin.module').then(x => x.AdminModule),
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
      {
        path: 'payment',
        loadChildren: () => import('./payment/payment.module').then(x => x.PaymentModule)
      }
      /** User Portal End */
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }


/**
 * 
 * _github-pages-challenge-Bharath1202

9729d418075bce38d01533b3612d12
 */