import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { UserInfo } from "./user-info.model";
import { UserInfoService } from "./user-info.service";

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
    constructor(private userInfoService:UserInfoService)
    {

    }

    ngOnInit(): void
    {
        console.log("Sending a get request to server");
        this.userInfoService.getUserInfo();
        console.log("Registering user showUserInfo as a subscriber");
        this.showUserInfo();
    }



    showUserInfo()
    {
        this.userInfoService.getUserInfo().subscribe((data: UserInfo) => 
            {
                console.log(data.FirstName);
                this.myInfo = data;
            })
    }
}