import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../Services/chat.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../Model/UserModel';
import { Message } from '../../Model/MessageModel';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [NgFor,FormsModule,CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {
  sender: string = '';
  currentUser: User = {
    id: '123', 
    name: 'John Doe',
    avatarUrl: 'https://example.com/avatar.jpg' 
  };
  newMessage: string = '';
  messages: Message[] = [];
  constructor(public chatService: ChatService){

  }
  ngOnInit() {
    this.chatService.StartConnection();
    this.chatService.messages.forEach(msg => this.messages.push(msg));
  }
  sendMessage(): void {
    //if (this.newMessage) {
      const message: Message = {
        id: new Date().getTime().toString(),
        senderId: this.currentUser.id,
        senderName: this.currentUser.name,
        content: this.newMessage,
        sentDate: new Date()
      };

      this.chatService.sendMessage(this.currentUser.name, this.newMessage);
      this.messages.push(message); // افزودن پیام به لیست محلی
      this.newMessage = ''; // پاک کردن ورودی پیام
  //  }
  }
}
