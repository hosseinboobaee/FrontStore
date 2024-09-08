import { Injectable } from '@angular/core';
import signalR from '@microsoft/signalr';
import { HubUrl } from '../Utility/PathTools';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  private hubUrl = HubUrl;
  private hubConnection: signalR.HubConnection;
  public messages: { sender: string, content: string, sentDate: Date }[] = [];
  constructor() { }
    // متد برای شروع اتصال به SignalR
    public startConnection(): void {
      this.hubConnection = new signalR.HubConnectionBuilder()
        .withUrl(this.hubUrl)  // آدرس سرور ASP.NET
        .build();
  
      this.hubConnection.start()
        .then(() => console.log('Connection started'))
        .catch(err => console.log('Error while starting connection: ' + err));
  
      this.hubConnection.on('ReceiveMessage', (sender, content, sentDate) => {
        this.messages.push({ sender, content, sentDate });
      });
    }
    // متد برای ارسال پیام به سرور
    public sendMessage(sender: string, content: string): void {
      this.hubConnection.invoke('SendMessage', sender, content)
        .catch(err => console.error(err));
    }
  
}
