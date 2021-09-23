/*This component is easily edited. In the homescreen or wherever <videocard></videocard> is called,
  to edit the variable just type videoTitle = (string).
  
  Ex.) <videocard videoTitle = "cats"></videocard>*/

import { Component } from "@angular/core";

@Component({
    selector : 'videocard-small',
    inputs : ['videoImage', 'videoTitle', 'videoLength', 'videoCreator', 'videoViews', 'videoDate'],
    templateUrl: 'videocardSmall.component.html',
})


export class VideoCardSmallComponent
{
    videoImage: string|null = "Type videoImage = (URL)";
    videoTitle: string|null = "Type videoTitle = (string)";
    videoLength: string|null = "Type videoLength = (string)";
    videoCreator: string|null = "Type videoCreator = (string)";
    videoViews: string|null = "Type videoViews = (string)";
    videoDate: string|null = "Type videoDate = (string)";
}