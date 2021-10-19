import { Component, Injectable, OnInit } from "@angular/core";
import { VideoInfoService } from "./video-info.service";
import { Video } from "../videocard/video.model";



@Injectable()
export class VideoInfoComponent implements OnInit
{

    videoInfo: Video | undefined;
    videos:Array<Video> = [];

    constructor(private videoInfoService:VideoInfoService)
    {

    }

    ngOnInit(): void
    {
        console.log("Sending a get request to server");
        this.videoInfoService.getVideos();
        console.log("Registering user showUserInfo as a subscriber");
        console.log(this.videos) //Empty array on console
    }
}