import { Component } from "@angular/core";

@Component({
    selector : 'side-videocard',
    inputs : ['videoImage', 'videoTitle', 'videoLength', 'videoCreator', 'videoViews', 'videoDate'],
    templateUrl: 'side-videocard.component.html'
})

export class SideVideoCardComponent
{
    videoImage: string|null = "Type videoImage = (URL)";
    videoTitle: string|null = "Type videoTitle = (string)";
    videoLength: string|null = "Type videoLength = (string)";
    videoCreator: string|null = "Type videoCreator = (string)";
    videoViews: string|null = "Type videoViews = (string)";
    videoDate: string|null = "Type videoDate = (string)";
}