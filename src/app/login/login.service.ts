import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AppGlobals } from '../app.globals'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient, public globals : AppGlobals) { }

  getTokenOnLogin(data)
  {
    return this.http.post<any>(this.globals.currentUrl+"/authenticate",data);
  }
  getAccountDetails(){
    return this.http.get(this.globals.currentUrl+"/account");
  }
}
