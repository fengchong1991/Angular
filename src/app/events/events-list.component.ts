import { Component } from '@angular/core'
import { EventService } from './shared/event.service'

@Component({
    selector: 'events-list',
    template:
    `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="well">
            <div>Hello World</div>
        </div>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail #thumbnail [event]="event"></event-thumbnail>
            </div>
        </div>
        <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>
    </div> 
    `
})

export class EventsListComponent {
  events: any[]

  constructor(private eventService: EventService){
      
    this.events = this.eventService.getEvents()
  }
    // handleEventClicked(data){
    //     console.log('received ' + data)
    // }
}