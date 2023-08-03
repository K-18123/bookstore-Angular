import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { BookPageComponent } from './components/pages/book-page/book-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchTerm',component:HomeComponent},
  {path:'category/:category',component:HomeComponent},
  {path:'book/:id',component:BookPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
