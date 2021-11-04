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

    addVideo(newVideo: Video) {
        this.getVideos().subscribe();
        return this.http.post(this.baseUrl + this.myInfoEndpoints, newVideo);
    }

    editVideo(newVideo: Video) {
        this.getVideos().subscribe();
        return this.http.put(this.baseUrl + this.myInfoEndpoints, newVideo);
    }
}