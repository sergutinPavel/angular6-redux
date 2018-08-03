import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  // {
  //   path: '', component: LayoutComponent, children: [
  //     {path: '', component: NavbarComponent, outlet: 'navbar'},
  //     {path: '', component: LeftBarComponent, outlet: 'leftbar'},
  //     {path: 'dashboard', component: DashboardComponent}
  //   ]
  // },
  {path: '**', redirectTo: '/dashboard', pathMatch: 'full'},
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: false});
