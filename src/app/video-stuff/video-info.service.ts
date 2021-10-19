import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Video } from "../videocard/video.model";

@Injectable({providedIn: 'root'})
export class VideoInfoService
{
    private baseUrl: string = 'https://fir-23bde-default-rtdb.firebaseio.com/';
    private myInfoEndpoints = 'video-list.json'
    constructor(private http: HttpClient)
    {
        
    }

    getVideos() //Method
    {
        return this.http.get<Video[]>(this.baseUrl + this.myInfoEndpoints);
    }
}