import { UIScript } from "./UIScript.js";
import { Message } from "./Message.js";
import { World } from "./World.js";
import { RuasAcademy } from './RuasAcademy.js';
window.onload = function () {
    var world = new World();
    var region = world.GetRegion(0); //Руас
    var academy = new RuasAcademy(region);
    console.log("".concat(academy.GetInfo("region"), " ").concat(academy.GetInfo("territory"), " ").concat(academy.GetInfo("area"), " ").concat(academy.GetInfo("city"), " ").concat(academy.GetInfo("district")));
    var message = new Message();
    academy.SetHunters();
    academy.StartMessage(message, world, academy, world.GetFullDate());
    academy.RaportAboutDangerRatio(message, region, world.GetFullDate());
    UIScript.DisplayDate(world.TranslateToString());
    var nextDayButton = document.querySelector(".next-day-button");
    if (nextDayButton !== null) {
        nextDayButton.onclick = function () {
            world.AddDay();
            UIScript.DisplayDate(world.TranslateToString());
            world.GetEOperation(message, world.GetDate(), region);
        };
    }
};
//# sourceMappingURL=MainScript.js.map