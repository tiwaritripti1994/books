import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { GenreComponent } from './genre/genre.component';


const routes: Routes = [
  {
  path:'',
  redirectTo:'genre',
  pathMatch: 'full' 
  },
  {
    path: 'genre',
    component:GenreComponent
  },
  {
    path: 'booklist',
    component: BooklistComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
