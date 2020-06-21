import { Injectable } from '@angular/core';
import { AppGlobals } from '../app.globals'
import { HttpHandler,HttpEvent, HttpRequest, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError, of} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
// import { AlertOnRightService } from '../../components/alert-on-right/alert-on-right.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public globals : AppGlobals, private router : Router, ) { }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    //handle your auth error or rethrow

    if (err['status'] == 0) // No internet or server is down
    {
      // this.alertOnRightService.showConstantAlert("Unable to connect to the server.", false);
    }
    else
    {
      // this.alertOnRightService.makeAlertEmpty();
    }

    return throwError(err);
}
  intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>>{
    //   // console.log("in")
    if(this.globals.isVerify == true && !req.headers.has('Content-Type'))
    {
          // console.log("inner")
          req = req.clone({
            
            setHeaders : {
              // new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
              // 'Content-Type': 'application/json',
              'Authorization': "Bearer "+ sessionStorage.getItem('currentUser')
            }
          })
          req.headers.append( 'Authorization',sessionStorage.getItem('currentUser'))
          console.log(req)
    }
   
    return next.handle(req).pipe(catchError(x=> this.handleAuthError(x)));
  }
}
