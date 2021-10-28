import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreLayoutComponent } from './explore/exploreLayout.component';
import { LayoutComponent } from './layout/layout.component';
import { LibraryLayoutComponent } from './library/libraryLayout.component';
import { MyChannelLayoutComponent } from './mychannel/mychannelLayout.component';
import { SubscriptionsLayoutComponent } from './subscriptions/subscriptionsLayout.component';
import { UploadPageComponent } from './uploadVideoPage/upload.component';

const routes: Routes = [
  { path: 'home', component : LayoutComponent },
  { path: 'explore', component : ExploreLayoutComponent },
  { path: 'library', component : LibraryLayoutComponent },
  { path: 'subscriptions', component : SubscriptionsLayoutComponent },
  { path: 'mychannel', component : MyChannelLayoutComponent},
  { path: 'uploadVideo', component : UploadPageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
   

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
