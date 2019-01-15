import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerComponent } from './pages/career/career.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
    // { path: 'test', loadChildren: './test-module/test.module#TestModule' },
  { path: 'career', component: CareerComponent },
  { path: '', component: HomepageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
export const routingComponents = [CareerComponent, HomepageComponent]
