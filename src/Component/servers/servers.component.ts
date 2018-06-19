import { Component } from '@angular/core';


@Component({

    selector : 'servers' ,
    templateUrl : './servers.component.html' ,
    styleUrls : ['./servers.component.css']

})

export class ServersComponent{

    //property binding
    allowNewServer = false;
  
    //property for event binding
    createServerStatus = "No server was created";
     serverName = "testserver";
    // property binding
    constructor() {
   
        setTimeout(() => {
            this.allowNewServer = true;
        },2000);

    }
   
        //method  for event binding
       onCreateServer() {
           this.createServerStatus = "server was created! Name is " + this.serverName ;
      }

    // onUpdateServerName( event:any) {
      //  console.log(event);
       // }

     onUpdateServerName(event: Event){
this.serverName = (<HTMLInputElement>event.target).value;
      }  
}
