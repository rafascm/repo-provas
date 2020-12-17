import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { InsertComponent } from './insert/insert.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'new', component: InsertComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
