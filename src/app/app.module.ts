import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { 
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivate,
 } from './events/index'

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes'
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component'
import { EventListResolver } from './events/events-list-resolver.service';
import { AuthService } from './user/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ 
    EventService, 
    ToastrService, 
    EventRouteActivate,
    EventListResolver,
    {
      provide: "canDeactivateCreateEvent",
      useValue: checkDirtyState
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty){
    return window.confirm("You have not saved this")
  }
  
  return true;
}