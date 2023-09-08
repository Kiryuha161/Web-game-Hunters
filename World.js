import { DisplayDate } from "./UIScript.js";

class World {
    constructor() {
        this.gameDate = new Date(2014, 1, 10);

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
    }
};

