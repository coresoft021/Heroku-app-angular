

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { DashComponent } from './dash/dash';
import { HomeComponent } from './home/home';
import { LoginComponent } from './login/login';
import { Addproduct } from './product/add_product';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login',component: LoginComponent },
    { path: 'dash', component: DashComponent ,canActivate: [AuthGuard] },
    { path: 'add_product', component : Addproduct , canActivate : [AuthGuard]},
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
