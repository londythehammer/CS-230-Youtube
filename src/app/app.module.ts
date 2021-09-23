import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TopNavBarComponent } from './header/header.component';
import { HomeScreenComponent } from './homescreen/homescreen.component';
import { LayoutComponent } from './layout/layout.component';
import { SideVideoCardComponent } from './side-videocard/side-videocard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarCollapseComponent } from './sidebar/sidebarCollapse.component';
import { VideoCardComponent } from './videocard/videocard.component';
import { AppRoutingModule } from './app-routing.module';
import { LibraryComponent } from './library/library.component';
import { LibraryLayoutComponent } from './library/libraryLayout.component';
import { ExploreComponent } from './explore/explore.component';
import { ExploreLayoutComponent } from './explore/exploreLayout.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SubscriptionsLayoutComponent } from './subscriptions/subscriptionsLayout.component';
import { VideoCardSmallComponent } from './videocard small/videocardSmall.component';
import { MyChannelLayoutComponent } from './mychannel/mychannelLayout.component';
import { MyChannel } from './mychannel/mychannel.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SidebarComponent,
    SidebarCollapseComponent,
    HomeScreenComponent,
    CarouselComponent,
    VideoCardComponent,
    SideVideoCardComponent,
    LayoutComponent,
    LibraryComponent,
    LibraryLayoutComponent,
    ExploreComponent,
    ExploreLayoutComponent,
    SubscriptionsComponent,
    SubscriptionsLayoutComponent,
    VideoCardSmallComponent,
    MyChannelLayoutComponent,
    MyChannel
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
