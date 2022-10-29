import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'principal',
        component:PrincipalComponent,
        
        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
