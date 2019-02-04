import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router"
import { Injectable } from "@angular/core"
import { EventService } from "../shared/event.service"

@Injectable()
export class EventRouteActivate implements CanActivate{
    constructor(private eventService: EventService, private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot){
        var eventExists = !!this.eventService.getEvent(+route.params['id']);

        if (!eventExists){
            this.router.navigate(['/404']);
        }

        return eventExists;
    }
}
