import { Message } from "./MessageModel";
import { User } from "./UserModel";

export class Conversation {
    id: string;              // شناسه مکالمه
    participants: User[];    // کاربران شرکت‌کننده در مکالمه
    messages: Message[];     // لیستی از پیام‌های رد و بدل شده در مکالمه
    startedAt: Date;         // تاریخ و ساعت شروع مکالمه
  }
  