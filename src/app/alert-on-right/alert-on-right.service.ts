import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AlertOnRightService {

    private subject = new Subject<any>();
    private keepAfterNavigationChange = false;

    constructor(private router: Router) {
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                } else {
                    // clear alert
                    this.subject.next();
                }
            }
        });
    } 
    private data = ''
    showAlertOnRight(text, flag) {
        // this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: text, success: flag, constant: false });

    }
    showConstantAlert(text, flag) {
        this.subject.next({ type: 'success', text: text, success: flag, constant: true });
    }
    alertAndNavigate(text, flag, url) {
        this.subject.next({ type: 'success', text: text, success: flag, constant: false, url: url });
    }
    // alertNavigateAndSetTimeOut(text, flag, url, time) {
    //     this.subject.next({ type: 'success', text: text, success: flag, constant: false, url: url, time: time });
    // }
    makeAlertEmpty() {
        this.subject.next(undefined);
    }
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}