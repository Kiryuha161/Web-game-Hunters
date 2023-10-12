import { LightOperation } from "./LightOperation.js";
import { Utilits } from "./Utilits.js";
import { Message } from "./Message.js";
import { Region } from "./Region.js";
import { RegionRuas } from "./RegionRuas.js";

export class World {
    private gameDate: Date;
    private lastGetNewEOperation: Date;
    private lightOperations: LightOperation[] = [];
    private regions: Region[] = [];

    constructor() {
        this.gameDate = new Date(2014, 0, 10);
        this.lastGetNewEOperation = new Date(2014, 0, 10);
        this.regions = [new RegionRuas()];
    }

    public TranslateToString(): string {
        return this.gameDate.toISOString();
    }

    public GetRegion(index: number): Region {
        return this.regions[index];
    }

    public AddDay(): void {
        this.gameDate.setDate(this.gameDate.getDate() + 1);
    }

    public GetDate() {
        return this.gameDate;
    }

    public GetFullDate() {
        return this.GetDate().getFullYear() + "/" + (this.GetDate().getMonth() + 1) + "/" + (this.GetDate().getDate() - 1)
    }

    public GetEOperation(message: Message, date: Date, region: Region): void {
        const daysSinceLastEOperation = Math.floor((this.gameDate.getTime() - this.lastGetNewEOperation.getTime()) / (1000 * 3600 * 24));

        if (daysSinceLastEOperation >= Utilits.GetRandomNumber(2, 5)) {

            let lightOperation = new LightOperation(Utilits.GetName("rus", "male") + " " + Utilits.GetSurname("rus", "male"), region);
            this.lightOperations.push(lightOperation);

            let idEOperation = this.lightOperations.length - 1;

            message.PerformListMessageEvent("Вы получили новое задание E-категории", this.lightOperations[idEOperation].ShowStartOperationInfo(), "Бюро заявок", this.GetFullDate());

            this.lastGetNewEOperation.setTime(this.gameDate.getTime());
        }
    }
}




