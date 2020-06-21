import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SchoolResourceComponent } from "./school-resource/school-resource.component";
import { StudentResourceComponent } from "./student-resource/student-resource.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  { path: "login", component : LoginComponent },
  { path: "school-resource", component : SchoolResourceComponent },
  { path: "student-resource", component : StudentResourceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
