import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './core/start/start.component';
import { RegistComponent } from './core/regist/regist.component';
import { LoginComponent } from './core/login/login.component';
import { ForgetComponent } from './core/forget/forget.component';

const routes: Routes = [
  {path:'start',component:StartComponent},
  {path:'login',component:LoginComponent},
  {path:'regist',component:RegistComponent},
  {path:'forget',component:ForgetComponent},
  {path:'main',loadChildren:'./main/main.module#MainModule'},
  {path:'**',redirectTo:'start'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
