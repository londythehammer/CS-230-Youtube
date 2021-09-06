import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TopNavBarComponent } from './header/header.component';
import { HomeScreenComponent } from './homescreen/homescreen.component';
import { SideVideoCardComponent } from './side-videocard/side-videocard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarCollapseComponent } from './sidebar/sidebarCollapse.component';
import { VideoCardComponent } from './videocard/videocard.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SidebarComponent,
    SidebarCollapseComponent,
    HomeScreenComponent,
    CarouselComponent,
    VideoCardComponent,
    SideVideoCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
