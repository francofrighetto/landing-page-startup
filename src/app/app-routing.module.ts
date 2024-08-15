import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerMasComponent } from './components/ver-mas/ver-mas.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'ver-mas/:proyecto', component: VerMasComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
