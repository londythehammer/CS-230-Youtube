/*This component is easily edited. In the homescreen or wherever <videocard></videocard> is called,
  to edit the variable just type videoTitle = (string).
  
  Ex.) <videocard videoTitle = "cats"></videocard>*/

import { Component, Input } from "@angular/core";

@Component({
    selector : 'videocard',
    inputs : ['videoImage', 'videoTitle', 'videoLength', 'videoCreator', 'videoCreatorImage', 'videoViews', 'videoDate'],
    templateUrl: 'videocard.component.html',
})


export class VideoCardComponent
{
    videoImage: string|null = "Type videoImage = (URL)";
    videoTitle: string|null = "Type videoTitle = (string)";
    videoLength: string|null = "Type videoLength = (string)";
    videoCreator: string|null = "Type videoCreator = (string)";
    videoCreatorImage: string|null = "Type videoCreatorImage = (URL)";
    videoViews: string|null = "Type videoViews = (string)";
    videoDate: string|null = "Type videoDate = (string)";
}