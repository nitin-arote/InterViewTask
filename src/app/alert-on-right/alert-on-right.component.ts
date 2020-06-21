import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertOnRightService } from './alert-on-right.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert-on-right',
  templateUrl: './alert-on-right.component.html',
  styleUrls: ['./alert-on-right.component.scss']
})
export class AlertOnRightComponent implements OnInit {

  private subscription: Subscription;
  message: any;

  constructor(private AlertOnRightService: AlertOnRightService, private router: Router) { }

  ngOnInit() {
      this.subscription = this.AlertOnRightService.getMessage().subscribe(message => { 
        this.message = message; 
          if(message != undefined)
          {

            if(message['constant'] != true)
            {
              setTimeout(() => {
                this.message = ""
                if(message['url'])
                {
                  this.router.navigate([message['url']]); //Needs full url without relativeTo
                }
                }, 3000);
            }
  
          }
      },
      err =>{
        console.log('---->err   ',err)
  
      });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }


}