import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerComponent } from './pages/career/career.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { JobsListComponent } from './pages/jobs-list/jobs-list.component';


const routes: Routes = [
  { path: 'career', component: CareerComponent },
  { path: '', component: HomepageComponent }
  { path: 'jobs-list', component: JobsListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
export const routingComponents = [CareerComponent, HomepageComponent, JobsListComponent]
