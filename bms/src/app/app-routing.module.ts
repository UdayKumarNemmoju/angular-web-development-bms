import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorporatesComponent } from './corporates/corporates.component';
import { HeaderOneComponent } from './header-one/header-one.component';
import { HeaderTwoComponent } from './header-two/header-two.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';


const routes: Routes = [
  {path:'', redirectTo: 'header', pathMatch: 'full'},
  {path:'header',component:HeaderComponent , children :[
    {path:'headerone', component:HeaderOneComponent},
    {path:'headertwo', component:HeaderTwoComponent},
    {path:'movies', component:MoviesComponent},
    {path:'corporates', component:CorporatesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
