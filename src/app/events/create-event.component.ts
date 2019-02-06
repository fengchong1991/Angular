import { Component, OnInit  } from '@angular/core'
import { Router } from '@angular/router'
import { EventService } from './shared';

@Component({
    templateUrl: 'create-event.component.html',
    styles:[`
    em {
        float: right;
        color: #E05C65;
        padding-left: 10px;
    }
    .error input {
        background-color: #E3C3C5;
    }

    .error ::-webkit-input-placeholder {
        color: #999;
    }

    .error ::-moz-placeholder {
        color: #999;
    }
    `]

})

export class CreateEventComponent implements OnInit{   
    newEvent
    isDirty: boolean = true
    
    constructor(private router: Router, private eventService: EventService){

    }

    ngOnInit(){
        this.newEvent = {
            name:'Ng Spectacular',
            date:'3/2/2019',
            time:'10am',
            price:123,
            location:{
                address: '465 happy st',
                city: 'BJ',
                country: 'China'
            },
            onlineUrl: 'google.com.au',
            imageUrl: ''
        }
    }

    saveEvent(formValues){
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }

    cancel() {
        this.router.navigate(['/events'])
    } 
}