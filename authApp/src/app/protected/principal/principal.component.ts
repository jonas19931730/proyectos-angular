import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styles: [
  ]
})
export class PrincipalComponent implements OnInit {

  get usuario(){
    return this.authService.usuario;
  }


  constructor(private router:Router,
              private authService:AuthService) { }

  ngOnInit(): void {
    if(!this.usuario){
      this.router.navigateByUrl('/auth/login')
    }
  }
  logout(){
    if(this.usuario){
      localStorage.removeItem('usuario');
    }
    this.router.navigateByUrl('/auth/login')
  }

}
