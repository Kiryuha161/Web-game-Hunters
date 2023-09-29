import { UIScript } from "./UIScript.js";
import { Message } from "./Message.js";
import { World } from "./World.js";
import { RuasAcademy } from './RuasAcademy.js';

window.onload = function () {
    let world: World = new World();
    let academy = new RuasAcademy();
    let message = new Message();
    academy.SetHunters();

    academy.StartMessage(message, world, academy, world.GetDate().getFullYear() + "/" + (world.GetDate().getMonth() + 1) + "/" + (world.GetDate().getDate() - 1));
    UIScript.DisplayDate(world.TranslateToString());

    const nextDayButton = document.querySelector(".next-day-button") as HTMLButtonElement;

    if (nextDayButton !== null) {
        nextDayButton.onclick = function () {
            world.AddDay();
            UIScript.DisplayDate(world.TranslateToString());
            world.GetEOperation(message, world.GetDate());
        }
    }
};





 
  






