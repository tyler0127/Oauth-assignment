import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'app-authorizen',
    templateUrl: './authorizen.component.html',
    styleUrls: ['./authorizen.component.scss']
})
export class AuthorizenComponent implements OnInit {
    // view
    p1;
    p2;
    str_btn;
    // parameters
    authCode;
    access_token;
    refresh_token;
    first_name;
    last_name;

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient) {
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            const code = params['code'];
            this.authCode = code;
            this.initRender();
            console.log('authorization Code:' + code); // Print the parameter to the console.
        });
    }
    onClick() {
        if (this.str_btn === 'get token') {
            this.getToken();
        } else if (this.str_btn === 'get data') {
            this.getData();
        } else {
            this.router.navigateByUrl('/login');
        }
    }

    getToken() {
        const url = 'https://web-service-spring-boot.herokuapp.com/oauth/token';
        this.http.get(url, {
            params: new HttpParams().set('code', this.authCode),
        }).subscribe(
            data => {
                this.access_token = data['access_token'];
                this.refresh_token = data['refresh_token'];
                this.tokenRender();
                console.log('access token:' + data['access_token']);
                console.log('refresh token:' + data['refresh_token']);
            }
        );
    }
    getData() {
        const url = 'http://140.118.110.32:50080/oauth/web/resource';
        this.http.get(url, {
            params: new HttpParams().set('access_token', this.access_token),
        }).subscribe(
            data => {
                this.first_name = data['first_name'];
                this.last_name = data['last_name'];
                this.dataRender();
                console.log('first name:' + data['first_name']);
                console.log('last name:' + data['last_name']);
            }
        );
    }

    initRender() {
        this.p1 = 'authorization code : ' + this.authCode;
        this.p2 = '';
        this.str_btn = 'get token';
    }
    tokenRender() {
        this.p1 = 'Access Token :' + this.access_token;
        this.p2 = 'Refresh Token :' + this.refresh_token;
        this.str_btn = 'get data';
    }
    dataRender() {
        this.p1 = 'First Name :' + this.first_name;
        this.p2 = 'Last Name :' + this.last_name;
        this.str_btn = 'back';
    }

}
