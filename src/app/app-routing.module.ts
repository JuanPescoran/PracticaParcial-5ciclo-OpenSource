import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeSectionComponent} from "./public/pages/home-section/home-section.component";
import {BundleListComponent} from "./store/pages/bundle-list/bundle-list.component";

const routes: Routes = [
  {path: 'home',component: HomeSectionComponent},
  {path: 'store/bundles', component: BundleListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
