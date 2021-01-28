import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './google-search-component/search.component';
import { SearchWithPagiComponent } from './google-search-with-pagi-comp/search-with-pagi.component';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'searchWithPage', component: SearchWithPagiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
