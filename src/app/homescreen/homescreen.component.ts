import { Component } from "@angular/core";
import { Video } from "../videocard/video.model";
import { homeVideos } from "./homeVideos";

@Component({
    selector : 'homescreen',
    templateUrl: 'homescreen.component.html'
})

export class HomeScreenComponent
{
    videos:Video[] = [];

    constructor()
    {
        for (var video of homeVideos)
        {
            this.videos.push(new Video(video));
        }
    }
}