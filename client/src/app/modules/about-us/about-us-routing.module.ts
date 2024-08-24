import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
  },
  // lazy loading syntax. it loads the AboutUsModule only when the '/about-us' path is accessed, which helps to improve the app's performance by loading modules only when necessary
  {
    path: '',
    component: AboutUsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsRoutingModule {}
