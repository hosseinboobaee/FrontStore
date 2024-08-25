import { Injectable } from '@angular/core';
import { HubUrl } from '../Utility/PathTools';
import { HttpTransportType, HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class PresenceService {
private hubUrl = HubUrl;
constructor() { }
public hubConnection : HubConnection;
StartConnection(){
   this.hubConnection = new HubConnectionBuilder().withUrl(this.hubUrl,{
    skipNegotiation: true,
    transport:HttpTransportType.WebSockets
   }).build();

   this.hubConnection.start()
   .then(
    () => {
      console.log('Hub Connection Start');  
      
    })
    .catch(
      err => console.log('error while starting connection:' + err))
  }

AskServer(){
  this.hubConnection.invoke("askServer", "hey")
  .catch(err => console.log(err));
  
}

  AskServerListener(){
    this.hubConnection.on("askServerResponse", (someText)=>{
      console.log(someText);

    })
  }
}
