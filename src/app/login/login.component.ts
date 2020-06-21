import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
// import { AlertOnRightService } from '../../../shared/components/alert-on-right/alert-on-right.service';
import { LoginService } from '../login/login.service';
import { AppGlobals } from '../app.globals'
import { AlertOnRightService } from "../alert-on-right/alert-on-right.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private alertOnRightService : AlertOnRightService,private formBuilder: FormBuilder, private router: Router, private loginService: LoginService, public globals :AppGlobals) { }
  loading = false;

  ngOnInit() {

  }

  loginForm = this.formBuilder.group({
    "username": "",
    "password": ""
  })

  onSubmit() {
    this.loginForm.controls['username'].setValue(this.loginForm.controls['username'].value.trim())
    if (this.loginForm.controls['username'].value == "") {
      // this.alertOnRightService.showAlertOnRight("Please enter username.", false);
    }
    else if (this.loginForm.controls['password'].value == "") {
      // this.alertOnRightService.showAlertOnRight("Please enter password.", false);
    }
    else {
      let data = 
        {
          "password": this.loginForm.controls['username'].value.trim(),
          "rememberMe": true,
          "username": this.loginForm.controls['password'].value.trim()
        }
      
      this.loginService.getTokenOnLogin(data).subscribe(
        res => {
        this.globals.logedinUser=res['id_token']
          this.globals.isVerify = true
          sessionStorage.setItem("currentUser", res['id_token'])
          this.alertOnRightService.showAlertOnRight("sucessfully login", true);
          setTimeout(() => {
            this.loginService.getAccountDetails().subscribe(
              res=>{
                console.log(res)
                if(res['login'] == "user"){
                  this.router.navigate(["/student-resource"]);
                }else if(res['login'] == "admin"){
                  this.router.navigate(["/school-resource"]);
                }
              },
              err =>{
                console.log(err)
              }
            )
            // this.router.navigate(["/admin-portal/wizard"]);
          }, 2000)

        },
        err => {
          this.alertOnRightService.showAlertOnRight(err['error']['message'], false);
        })

    }
  }
  
}
