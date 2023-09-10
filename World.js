import { DisplayDate, DisplayNewMessage } from "./UIScript.js";
import { GetRandomNumber } from "./Utilits.js";

class World {
    constructor() {
        this.gameDate = new Date(2014, 0, 10);
        this.lastGetNewLastOperation = new Date(2014, 0, 10); 

        this.translateToString = function () {
            return this.gameDate.toISOString();
        };

        this.addDay = function () {
            this.gameDate.setDate(this.gameDate.getDate() + 1);
        };
    }
}

window.onload = function () {
    const world = new World();
    DisplayDate(world.translateToString());

    const nextDayButton = document.querySelector(".next-day-button");
    nextDayButton.onclick = function () {
        world.addDay();
        DisplayDate(world.translateToString());
        CheckTaskCondition(world);
    }

    
};

export function PerformListMessageEvent(text) {
    const message = text;
    DisplayNewMessage(message);
}

export function CheckTaskCondition(world) {
    if (world.gameDate.getDate() - world.lastGetNewLastOperation.getDate() >= GetRandomNumber(1, 4)) {
        PerformListMessageEvent("Получена заявка на выполенние задания E-категории");

        world.lastGetNewLastOperation = new Date(world.gameDate);
   }
}

