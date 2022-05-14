import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveFundraisingComponent } from './pages/active-gigDetails/fundraising/fundraising.component';
import { FundraisingComponent } from './pages/gigDetails/fundraising/fundraising.component';
import { SingleVolunterComponent } from './pages/gigDetails/single-volunter/single-volunter.component';

const routes: Routes = [
  {
    path: 'gigDetails',
    children: [
      {
        path: 'fundraising',
        component: FundraisingComponent,
      },
      {
        path: 'singleVolunteer',
        component: SingleVolunterComponent,
      },
    ],
  },
  {
    path: 'active-gig-details',
    children: [
      {
        path: 'fundraising',
        component: ActiveFundraisingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
