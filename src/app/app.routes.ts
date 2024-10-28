import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';


export const routes: Routes = [
    { path: "",redirectTo:"login", pathMatch: "full" },
    { path: "dashboard", component: DashboardComponent },
    { path: "login", component: LoginComponent},
    { path: "admin", component: AdminComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutes {}