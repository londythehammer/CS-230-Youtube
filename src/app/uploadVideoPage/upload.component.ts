import { Component, Input } from "@angular/core";
import { VideoInfoService } from "../video-stuff/video-info.service";
import { Video } from "../videocard/video.model";


@Component({
    selector : 'uploadVideoPage',
    templateUrl: 'upload.component.html'
})

export class UploadPageComponent
{
    @Input()
    videoCreator!: string;
    @Input()
    videoCreatorImage!: string;
    @Input()
    videoDate!: string;
    @Input()
    videoImage!: string;
    @Input()
    videoLength!: string;
    @Input()
    videoTitle!: string;
    @Input()
    videoViews!: string;
    
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

    onAddVideo(newVideo: Video): void {
        if (newVideo.videoCreator != "" && newVideo.videoCreatorImage != "" && newVideo.videoDate != "" && newVideo.videoImage != "" && newVideo.videoLength != "" && newVideo.videoTitle != "" && newVideo.videoViews != "") {
            this.videoInfoService.addVideo(newVideo).subscribe((data) => {
                console.log("Added");
                console.log(data);
            })
        }
    } 
}