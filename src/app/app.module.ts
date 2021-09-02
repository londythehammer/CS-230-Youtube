import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/header.component';
import { HomeScreenComponent } from './homescreen/homescreen.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarCollapseComponent } from './sidebar/sidebarCollapse.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SidebarComponent,
    SidebarCollapseComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
