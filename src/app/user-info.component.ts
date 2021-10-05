import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Injectable()
@Component
(
    {
        selector: "user-info",
        templateUrl: "user-info.component.html"
    }
)
export class UserInfoComponent implements OnInit
{
    myInfo: UserInfo | undefined;
    constructor(private http: HttpClient)
    {

    }

    ngOnInit(): void
    {
        console.log("Sending a get request to server");
        this.getUserInfo();
        console.log("Registering user showUserInfo as a subscriber");
        this.showUserInfo();
    }

    getUserInfo() //Method
    {
        return this.http.get<UserInfo>('https://fir-23bde-default-rtdb.firebaseio.com/my-info.json');
    }

    showUserInfo()
    {
        this.getUserInfo().subscribe((data: UserInfo) => 
            {
                console.log(data.FirstName);
                this.myInfo = data;
            })
    }
}