import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(router: Router) { }

    ngOnInit() {
    }
    getAuthCode() {
        window.location.href = 'http://140.118.110.32:50080/oauth/web/authorize?response_type=code&client_id=m10709305&state=programming_homework_2&redirect_uri=https://tyler0127.github.io/Oauth-assignment/auth';
    }
}
