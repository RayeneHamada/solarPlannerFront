import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanDeactivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate  {
 
  constructor(private router :Router,private authService: AuthService){

  }
  canActivate(): boolean{
    if(this.authService.isloggedin()){
      this.router.navigate(['login']);      
      return false;
    }
    return true;
  }

  
  

  
  
}
