import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Observable } from "rxjs";
import { Video } from "./videocard/video.model";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class DatabaseService
{
    items: Observable<Video[]> | undefined;
    constructor(private db:AngularFireDatabase)
    {        
        console.log("Setting up Firebase connection");
        this.items = this.db.list<Video>('video-list').valueChanges();
        //this.items = this.db.database<Object>(''.va)
    }

    public showData()
    {
        this.items?.subscribe((data: Video[]) => 
        {
            console.log("Data Received");
            console.log(data);
            for (let item of data)
            {
                console.log(item);
            }
        })
    }
}