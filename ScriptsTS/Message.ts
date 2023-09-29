import { UIScript } from "./UIScript.js";
import { Hunter } from "./Hunter.js";

export class Message {
    private id = 0;
    
    public PerformListMessageEvent(messageText: string, contentText: string, sender: string, date: string): void;
    public PerformListMessageEvent(messageText: string, contentText: string, sender: string, date: string, hunters: Hunter[]): void;
    
    public PerformListMessageEvent(messageText: string, contentText: string, sender: string, date: string, hunters?: Hunter[]): void {
        this.id++;

        if (hunters) {
            UIScript.DisplayNewMessage(messageText + ". Отправитель - " + sender + ". Дата - " + date, this.id, contentText, hunters);
        } else {
            UIScript.DisplayNewMessage(messageText + ". Отправитель - " + sender + ". Дата - " + date, this.id, contentText + "<br><br>" + date);
        }
    }

    
    public GetID() {
         return this.id;
    }

}