/*This component is easily edited. In the homescreen or wherever <videocard></videocard> is called,
  to edit the variable just type videoTitle = (string).
  
  Ex.) <videocard videoTitle = "cats"></videocard>*/

  import { Component, Input } from "@angular/core";

  @Component({
      selector : 'homeVideocard',
      templateUrl: 'videocard.component.html',
  })
  
  
  export class HomeVideoCardComponent
  {
      @Input()
      videoImage!: string;
      @Input()
      videoTitle!: string;
      @Input()
      videoLength!: string;
      @Input()
      videoCreator!: string;
      @Input()
      videoCreatorImage!: string;
      @Input()
      videoViews!: string;
      @Input()
      videoDate!: string;
  }