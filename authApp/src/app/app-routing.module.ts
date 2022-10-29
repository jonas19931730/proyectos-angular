import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=>import('../app/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'protected',
    loadChildren:()=>import('../app/protected/protected.module').then(m=>m.ProtectedModule),
  },
  {
    path:'**',
    redirectTo:'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
