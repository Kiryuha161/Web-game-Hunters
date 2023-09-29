import { LightOperation } from "./LightOperation.js";
import { Utilits } from "./Utilits.js";
import { Message } from "./Message.js";

export class World {
    private gameDate: Date;
    private lastGetNewEOperation: Date;
    private lightOperations: LightOperation[] = [];
    
    constructor() {
        this.gameDate = new Date(2014, 0, 10);
        this.lastGetNewEOperation = new Date(2014, 0, 10);
    }
    
    public TranslateToString(): string {
        return this.gameDate.toISOString();
    }

    public AddDay(): void {
        this.gameDate.setDate(this.gameDate.getDate() + 1);
    }

    public GetDate() {
        return this.gameDate;
    }

    public GetEOperation(message, date): void {
        const daysSinceLastEOperation = Math.floor((this.gameDate.getTime() - this.lastGetNewEOperation.getTime()) / (1000 * 3600 * 24));
    
        if (daysSinceLastEOperation >= Utilits.GetRandomNumber(2, 5)) {
            console.log("Игровая дата - " + this.gameDate.toLocaleDateString());
            console.log("Последнее событие - " + this.lastGetNewEOperation.toLocaleDateString());
    
            let lightOperation = new LightOperation(Utilits.GetName("rus", "male") + " " + Utilits.GetSurname("rus", "male"));
            this.lightOperations.push(lightOperation);
    
            let idEOperation = this.lightOperations.length - 1;
    
            message.PerformListMessageEvent("Вы получили новое задание E-категории", this.lightOperations[idEOperation].ShowStartOperationInfo(), "Бюро заявок", this.gameDate.getFullYear() + "/" + (this.gameDate.getMonth() + 1) + "/" + (this.gameDate.getDate() - 1));
    
            this.lastGetNewEOperation.setTime(this.gameDate.getTime());
        }
    }
}

