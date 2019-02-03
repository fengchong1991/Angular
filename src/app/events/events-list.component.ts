import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'

@Component({
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
                <event-thumbnail #thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
            </div>
        </div>
        <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>
    </div> 
    `
})

export class EventsListComponent implements OnInit {
  events: any[]

  constructor(private eventService: EventService, private toastr: ToastrService){
  }
    // handleEventClicked(data){
    //     console.log('received ' + data)
    // }
    
  ngOnInit(){
      this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName){
      this.toastr.success(eventName);
  }
}