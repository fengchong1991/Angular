import { Routes } from '@angular/router'

import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivate } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';
import { CreateSessionComponent } from './events';


export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']}, 
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivate]},
    { path: 'events/session/new', component: CreateSessionComponent},
    { path: "404", component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'user', loadChildren: './user/user.module#UserModule'}
]