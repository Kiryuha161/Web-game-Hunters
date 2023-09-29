import { UIScript } from "./UIScript.js";
import { Message } from "./Message.js";
import { World } from "./World.js";
import { RuasAcademy } from './RuasAcademy.js';
window.onload = function () {
    var world = new World();
    var academy = new RuasAcademy();
    var message = new Message();
    academy.SetHunters();
    academy.StartMessage(message, world, academy, world.GetDate().getFullYear() + "/" + (world.GetDate().getMonth() + 1) + "/" + (world.GetDate().getDate() - 1));
    UIScript.DisplayDate(world.TranslateToString());
    var nextDayButton = document.querySelector(".next-day-button");
    if (nextDayButton !== null) {
        nextDayButton.onclick = function () {
            world.AddDay();
            UIScript.DisplayDate(world.TranslateToString());
            world.GetEOperation(message, world.GetDate());
        };
    }
};
//# sourceMappingURL=MainScript.js.map