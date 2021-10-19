import { Component } from "@angular/core";
import { VideoInfoService } from "../video-stuff/video-info.service";
import { Video } from "../videocard/video.model";
import { homeVideos } from "./homeVideos";

let data:Array<String>= ['a', 'b'];

@Component({
    selector : 'homescreen',
    templateUrl: 'homescreen.component.html'
})

export class HomeScreenComponent
{
    videos:Video[] = [];
    //videos = VideoInfoComponent.

    constructor(private videoInfoService:VideoInfoService)
    {
        console.log(data);
        /*for (var video of homeVideos)
        {
            this.videos.push(new Video(video));
        }*/
        console.log('a' + this.videoInfoService.getVideos().subscribe((data: Video[]) => {
            for(var item in data)
            {
                console.log(data[item]);
                this.videos.push(data[item])
            }
        }
        ));
    }
}