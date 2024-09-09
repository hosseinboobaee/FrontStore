import { Injectable } from '@angular/core';
import { HubUrl } from '../Utility/PathTools';
import signalR, { HttpTransportType, HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private hubUrl = HubUrl;
  private hubConnection: HubConnection;
  public messages: { id:string, senderId: string,senderName:string, content: string, sentDate: Date }[] = [];
  constructor() { }
    // متد برای شروع اتصال به SignalR
    public StartConnection(): void {
      this.hubConnection = new HubConnectionBuilder().withUrl(this.hubUrl,{
        skipNegotiation: true,
        transport:HttpTransportType.WebSockets
       }).build();
  
      this.hubConnection.start()
        .then(() => console.log('Connection started'))
        .catch(err => console.log('Error while starting connection: ' + err));
  
      this.hubConnection.on('ReceiveMessage', (id, senderId,senderName, content, sentDate) => {
        this.messages.push({id, senderId, senderName, content, sentDate });
      });
    }
    // متد برای ارسال پیام به سرور
    public sendMessage(sender: string, content: string): void {
      this.hubConnection.invoke('SendMessage', sender, content)
      .then(()=>{
        console.log("askServer.then");
      })
      .catch(err => console.log(err));
      console.log("This is the final Prompt");
    }
  
}
