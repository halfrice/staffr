import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { LifeformsComponent }      from './lifeforms/lifeforms.component';
import { LifeformStatsComponent }  from './lifeform-stats/lifeform-stats.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'lifeforms',  component: LifeformsComponent },
  { path: 'stats/:id', component: LifeformStatsComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }