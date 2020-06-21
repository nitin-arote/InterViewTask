import { Injectable, HostListener } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AppGlobals {
  public logedinUser: object = {}
 
  constructor(private router: Router) {
    // if (sessionStorage.getItem('currentUser') != null) {
    //   this.logedinUser = JSON.parse(sessionStorage.getItem('currentUserInfo'))
    // }
  }
 readonly currentUrl: string = "http://3.6.91.229:8080/api"
  public isLogin: boolean = false
public isVerify = false
  public whenLogin() {
    if (sessionStorage.getItem('currentUser') != null) {
      this.isLogin = sessionStorage.getItem('currentUser') != null
      return this.isLogin
    }

  }

}
