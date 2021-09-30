export class Video
{
    videoImage: string;
    videoTitle: string;
    videoLength: string;
    videoCreator: string;
    videoCreatorImage: string;
    videoViews: string;
    videoDate: string;

    constructor({videoImage, videoTitle, videoLength, videoCreator, videoCreatorImage, videoViews, videoDate} :
        {
            videoImage: string,
            videoTitle: string,
            videoLength: string,
            videoCreator: string,
            videoCreatorImage: string,
            videoViews: string,
            videoDate: string
        })
        {
            this.videoImage = videoImage;
            this.videoTitle = videoTitle;
            this.videoLength = videoLength;
            this.videoCreator = videoCreator;
            this.videoCreatorImage = videoCreatorImage;
            this.videoViews = videoViews;
            this.videoDate = videoDate;
        }
}