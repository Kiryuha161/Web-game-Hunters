import { UIScript } from "./UIScript.js";
import { Message } from "./Message.js";
import { World } from "./World.js";
import { RuasAcademy } from './RuasAcademy.js';
import { Region } from "./Region.js";
import { RegionRuas } from "./RegionRuas.js";
import { Territory } from "./Territory.js";
import { TerritoryJugras } from "./TerritoryJugras.js";
import { Area } from "./Area.js";
import { AreaGrand } from "./AreaGrand.js";
import { AreaOscar } from "./AreaOscar.js";
import { District } from "./District.js";
import { DistrictNorthGun } from "./DistrictNorthGun.js";
import { DistrictNorthMerra } from "./DiscrictNorthMerra.js";
import { DistrictNorthPleya } from "./DistrictNorthPleya.js";
import { DistrictSouthGun } from "./DistrictSouthGun.js";
import { DistrictSouthMerra } from "./DistrictSouthMerra.js";
import { DistrictSouthPleya } from "./DistrictSouthPleya.js";

window.onload = function () {
    const world: World = new World();
    const region: Region = world.GetRegion(0);//Руас
    const academy = new RuasAcademy(region);
    console.log(`${academy.GetInfo("region")} ${academy.GetInfo("territory")} ${academy.GetInfo("area")} ${academy.GetInfo("city")} ${academy.GetInfo("district")}`)
    const message = new Message();
    academy.SetHunters();

    academy.StartMessage(message, world, academy, world.GetFullDate());
    academy.RaportAboutDangerRatio(message, region, world.GetFullDate());
    UIScript.DisplayDate(world.TranslateToString());

    const nextDayButton = document.querySelector(".next-day-button") as HTMLButtonElement;

    if (nextDayButton !== null) {
        nextDayButton.onclick = function () {
            world.AddDay();
            UIScript.DisplayDate(world.TranslateToString());
            world.GetEOperation(message, world.GetDate(), region);
        }
    }
};





 
  






