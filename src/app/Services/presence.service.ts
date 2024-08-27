import { Injectable } from '@angular/core';
import { HubUrl } from '../Utility/PathTools';
import { HttpTransportType, HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { log } from 'console';

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
      this.AskServerListener();
      this.AskServer();
      
    })
    .catch(
      err => console.log('error while starting connection:' + err))
  }

AskServer(){
  console.log("askServerStart");
  
  this.hubConnection.invoke("askServer", "hey")
  .then(()=>{
    console.log("askServer.then");
  })
  .catch(err => console.log(err));
  console.log("This is the final Prompt");
  
}

  AskServerListener(){
    console.log("askServerListenerStart");
    
    this.hubConnection.on("askServerResponse", (someText)=>{
      console.log(someText);

    })
  }
}
